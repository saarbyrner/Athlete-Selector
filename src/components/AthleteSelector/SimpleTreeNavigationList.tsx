import React, { useMemo, useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  IconButton,
  Paper,
  Button,
} from '@mui/material';
import {
  ChevronRight as ChevronRightIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { GroupedAthleteList } from './GroupedAthleteList';
import { Athlete, SortOrder } from './types';

interface SquadNode {
  id: string;
  name: string;
  clubId: string;
  clubName: string;
  athletes: Athlete[];
}

interface ClubNode {
  id: string;
  name: string;
  athletes: Athlete[];
  squads: SquadNode[];
}

interface SimpleTreeNavigationListProps {
  athletes: Athlete[];
  selectedAthletes: string[];
  onSelectionChange: (athleteId: string, selected: boolean) => void;
  onBatchSelectionChange?: (athleteIds: string[], selected: boolean) => void;
  order?: SortOrder;
  groupBy?: 'position' | 'status';
}

export const SimpleTreeNavigationList: React.FC<SimpleTreeNavigationListProps> = ({
  athletes,
  selectedAthletes,
  onSelectionChange,
  onBatchSelectionChange,
  order = 'asc',
  groupBy = 'position',
}) => {
  const [activeClubId, setActiveClubId] = useState<string | null>(null);
  const [activeSquadId, setActiveSquadId] = useState<string | null>(null);

  // Build the club → squad → athlete hierarchy so the tree view can drill down one level at a time
  const clubs: ClubNode[] = useMemo(() => {
    const clubMap = new Map<string, { name: string; athletes: Athlete[]; squads: Map<string, Athlete[]> }>();

    athletes.forEach((athlete) => {
      if (!clubMap.has(athlete.clubId)) {
        clubMap.set(athlete.clubId, {
          name: athlete.clubName,
          athletes: [],
          squads: new Map(),
        });
      }

      const entry = clubMap.get(athlete.clubId)!;
      entry.athletes.push(athlete);

      if (!entry.squads.has(athlete.ageGroup)) {
        entry.squads.set(athlete.ageGroup, []);
      }
      entry.squads.get(athlete.ageGroup)!.push(athlete);
    });

    const getAgeNumber = (value: string) => {
      const match = value.match(/U(\d+)/);
      return match ? parseInt(match[1], 10) : 0;
    };

    return Array.from(clubMap.entries())
      .map(([id, value]) => ({
        id,
        name: value.name,
        athletes: value.athletes,
        squads: Array.from(value.squads.entries())
          .map(([squadId, squadAthletes]) => ({
            id: squadId,
            name: squadId,
            clubId: id,
            clubName: value.name,
            athletes: squadAthletes,
          }))
          .sort((a, b) => getAgeNumber(b.name) - getAgeNumber(a.name)),
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [athletes]);

  const activeClub = useMemo(() => (
    activeClubId ? clubs.find(club => club.id === activeClubId) ?? null : null
  ), [activeClubId, clubs]);

  const activeSquad = useMemo(() => (
    activeClub && activeSquadId
      ? activeClub.squads.find(squad => squad.id === activeSquadId) ?? null
      : null
  ), [activeClub, activeSquadId]);

  const toggleGroupSelection = (groupAthletes: Athlete[]) => {
    const ids = groupAthletes.map(athlete => athlete.id);
    if (ids.length === 0) return;

    const allSelected = groupAthletes.every(athlete => selectedAthletes.includes(athlete.id));
    const shouldSelect = !allSelected;

    if (onBatchSelectionChange) {
      onBatchSelectionChange(ids, shouldSelect);
    } else {
      ids.forEach(id => onSelectionChange(id, shouldSelect));
    }
  };

  const handleClubSelect = (club: ClubNode) => {
    setActiveClubId(club.id);
    setActiveSquadId(null);
  };

  const handleBackToClubs = () => {
    setActiveClubId(null);
    setActiveSquadId(null);
  };

  const handleSquadSelect = (squad: SquadNode) => {
    setActiveSquadId(squad.id);
  };

  const handleBackToSquads = () => {
    setActiveSquadId(null);
  };

  if (activeSquad && activeClub) {
    const selectedCount = activeSquad.athletes.filter(a => selectedAthletes.includes(a.id)).length;
    const isAllSelected = activeSquad.athletes.length > 0 && selectedCount === activeSquad.athletes.length;

    return (
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            px: 2,
            py: 1.5,
            borderBottom: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'background.paper',
          }}
        >
          <IconButton
            onClick={handleBackToSquads}
            size="small"
            sx={{ mr: 1 }}
          >
            <ArrowBackIcon fontSize="small" />
          </IconButton>

          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'text.primary',
                lineHeight: 1.2,
              }}
            >
              {activeSquad.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                color: 'text.secondary',
                lineHeight: 1.2,
              }}
            >
              {activeClub.name}
            </Typography>
          </Box>

          <Button
            size="small"
            onClick={() => toggleGroupSelection(activeSquad.athletes)}
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'text.primary',
              textTransform: 'none',
              minWidth: 'auto',
              p: 0,
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              },
            }}
          >
            {isAllSelected ? 'Deselect all' : 'Select all'}
          </Button>
        </Box>

        <Box sx={{ overflow: 'auto' }}>
          <GroupedAthleteList
            athletes={activeSquad.athletes}
            selectedAthletes={selectedAthletes}
            onSelectionChange={onSelectionChange}
            onBatchSelectionChange={onBatchSelectionChange}
            groupBy={groupBy}
            order={order}
          />
        </Box>
      </Box>
    );
  }

  if (activeClub) {
    const selectedCount = activeClub.athletes.filter(a => selectedAthletes.includes(a.id)).length;
    const isAllSelected = activeClub.athletes.length > 0 && selectedCount === activeClub.athletes.length;

    return (
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            px: 2,
            py: 1.5,
            borderBottom: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'background.paper',
          }}
        >
          <IconButton
            onClick={handleBackToClubs}
            size="small"
            sx={{ mr: 1 }}
          >
            <ArrowBackIcon fontSize="small" />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'text.primary',
              flexGrow: 1,
            }}
          >
            {activeClub.name}
            {selectedCount > 0 && (
              <Typography component="span" variant="body2" sx={{ color: 'text.secondary', ml: 0.5 }}>
                ({selectedCount})
              </Typography>
            )}
          </Typography>

          <Button
            size="small"
            onClick={() => toggleGroupSelection(activeClub.athletes)}
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '0.875rem',
              fontWeight: 400,
              color: 'text.primary',
              textTransform: 'none',
              minWidth: 'auto',
              p: 0,
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              },
            }}
          >
            {isAllSelected ? 'Deselect all' : 'Select all'}
          </Button>
        </Box>

        <Paper elevation={0} sx={{ width: '100%' }}>
          <List sx={{ py: 0 }}>
            {activeClub.squads.map((squad) => {
              const selectedSquadCount = squad.athletes.filter(a => selectedAthletes.includes(a.id)).length;
              const squadAllSelected = squad.athletes.length > 0 && selectedSquadCount === squad.athletes.length;

              return (
                <ListItem key={squad.id} disablePadding>
                  <ListItemButton
                    onClick={() => handleSquadSelect(squad)}
                    sx={{
                      px: 2,
                      py: 1,
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontFamily: '"Open Sans", sans-serif',
                            fontSize: '1rem',
                            fontWeight: 400,
                            color: 'text.primary',
                          }}
                        >
                          {squad.name}
                          {selectedSquadCount > 0 && (
                            <Typography component="span" variant="body2" sx={{ color: 'text.secondary', ml: 0.5 }}>
                              ({selectedSquadCount})
                            </Typography>
                          )}
                        </Typography>
                      }
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Button
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleGroupSelection(squad.athletes);
                        }}
                        sx={{
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '0.8125rem',
                          fontWeight: 400,
                          color: 'text.primary',
                          textTransform: 'none',
                          minWidth: 'auto',
                          p: 0,
                          '&:hover': {
                            backgroundColor: 'transparent',
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        {squadAllSelected ? 'Deselect all' : 'Select all'}
                      </Button>
                      <ChevronRightIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                    </Box>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Box>
    );
  }

  if (clubs.length === 0) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          No athletes available
        </Typography>
      </Box>
    );
  }

  return (
    <Paper elevation={0} sx={{ width: '100%' }}>
      <List sx={{ py: 0 }}>
        {clubs.map((club) => {
          const selectedCount = club.athletes.filter(a => selectedAthletes.includes(a.id)).length;
          const isAllSelected = club.athletes.length > 0 && selectedCount === club.athletes.length;
          const isHighlighted = club.squads.some(squad => squad.name === 'U23');

          return (
            <ListItem
              key={club.id}
              disablePadding
              sx={{
                backgroundColor: isHighlighted ? 'action.selected' : 'transparent',
              }}
            >
              <ListItemButton
                onClick={() => handleClubSelect(club)}
                sx={{
                  px: 2,
                  py: 1,
                  '&:hover': {
                    backgroundColor: isHighlighted ? 'action.selected' : 'action.hover',
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: '1rem',
                        fontWeight: 400,
                        color: 'text.primary',
                      }}
                    >
                      {club.name}
                      {selectedCount > 0 && (
                        <Typography component="span" variant="body2" sx={{ color: 'text.secondary', ml: 0.5 }}>
                          ({selectedCount})
                        </Typography>
                      )}
                    </Typography>
                  }
                  secondary={
                    club.squads.length > 0 ? (
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '0.8125rem',
                          color: 'text.secondary',
                        }}
                      >
                        {club.squads.map(squad => squad.name).join(', ')}
                      </Typography>
                    ) : undefined
                  }
                />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Button
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleGroupSelection(club.athletes);
                    }}
                    sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      fontSize: '0.8125rem',
                      fontWeight: 400,
                      color: 'text.primary',
                      textTransform: 'none',
                      minWidth: 'auto',
                      p: 0,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    {isAllSelected ? 'Deselect all' : 'Select all'}
                  </Button>
                  <ChevronRightIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};
