import React from 'react';
import {
  Box,
  Checkbox,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface ClubsListProps {
  clubs: string[];
  squads?: string[]; // defaults to current squads
}

const DEFAULT_SQUADS = ['U21', 'U19', 'U17'];

export const ClubsList: React.FC<ClubsListProps> = ({ clubs, squads = DEFAULT_SQUADS }) => {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});
  const [selectedByClub, setSelectedByClub] = React.useState<Record<string, Set<string>>>({});

  const toggleExpand = (club: string) => {
    setExpanded(prev => ({ ...prev, [club]: !prev[club] }));
  };

  const isAllSelected = (club: string) => {
    const set = selectedByClub[club];
    return set && set.size === squads.length;
  };

  const isIndeterminate = (club: string) => {
    const set = selectedByClub[club];
    return set != null && set.size > 0 && set.size < squads.length;
  };

  const handleToggleAll = (club: string) => {
    setSelectedByClub(prev => {
      const next = { ...prev };
      if (isAllSelected(club)) {
        next[club] = new Set();
      } else {
        next[club] = new Set(squads);
      }
      return next;
    });
  };

  const handleToggleSquad = (club: string, squad: string) => {
    setSelectedByClub(prev => {
      const current = new Set(prev[club] ?? []);
      if (current.has(squad)) {
        current.delete(squad);
      } else {
        current.add(squad);
      }
      return { ...prev, [club]: current };
    });
  };

  return (
    <Box sx={{ p: 1 }}>
      <List disablePadding>
        {clubs.sort((a, b) => a.localeCompare(b)).map((club) => {
          const all = isAllSelected(club);
          const indeterminate = isIndeterminate(club);
          const open = expanded[club] ?? false;
          return (
            <Box key={club} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
              <ListItem
                secondaryAction={open ? <ExpandLess /> : <ExpandMore />}
                disableGutters
                sx={{ px: 1 }}
              >
                <ListItemButton onClick={() => toggleExpand(club)} sx={{ py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Checkbox
                      edge="start"
                      checked={all}
                      indeterminate={indeterminate}
                      tabIndex={-1}
                      disableRipple
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleAll(club);
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="body1">{club}</Typography>} />
                </ListItemButton>
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding sx={{ pl: 5, pb: 1 }}>
                  {squads.map((squad) => {
                    const set = selectedByClub[club] ?? new Set<string>();
                    const checked = set.has(squad);
                    return (
                      <ListItem key={`${club}-${squad}`} disableGutters sx={{ px: 1 }}>
                        <ListItemButton
                          dense
                          onClick={() => handleToggleSquad(club, squad)}
                          sx={{ py: 0.5 }}
                        >
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <Checkbox
                              edge="start"
                              checked={checked}
                              tabIndex={-1}
                              disableRipple
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleSquad(club, squad);
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText primary={squad} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </Box>
          );
        })}
      </List>
    </Box>
  );
};


