import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  IconButton,
  Paper,
  useTheme,
} from '@mui/material';
import {
  ChevronRight as ChevronRightIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { CompactAthleteCard } from './CompactAthleteCard';
import { SortMenu, SortOption } from './SortMenu';
import { Athlete } from './types';

interface Squad {
  id: string;
  name: string;
  athletes: Athlete[];
}

interface TreeNavigationListProps {
  athletes: Athlete[];
  selectedAthletes: string[];
  onSelectionChange: (athleteId: string, selected: boolean) => void;
  sortBy: SortOption;
}

export const TreeNavigationList: React.FC<TreeNavigationListProps> = ({
  athletes,
  selectedAthletes,
  onSelectionChange,
  sortBy,
}) => {
  const theme = useTheme();
  const [selectedSquad, setSelectedSquad] = useState<Squad | null>(null);

  // Group athletes by squad/age group
  const squads: Squad[] = React.useMemo(() => {
    const squadMap: { [key: string]: Athlete[] } = {};

    athletes.forEach(athlete => {
      const squadKey = athlete.ageGroup;
      if (!squadMap[squadKey]) {
        squadMap[squadKey] = [];
      }
      squadMap[squadKey].push(athlete);
    });

    return Object.entries(squadMap).map(([id, squadAthletes]) => ({
      id,
      name: id,
      athletes: squadAthletes,
    })).sort((a, b) => {
      // Sort squads by age group (U23, U21, U19, etc.)
      const getAgeNumber = (name: string) => {
        const match = name.match(/U(\d+)/);
        return match ? parseInt(match[1]) : 0;
      };
      return getAgeNumber(b.name) - getAgeNumber(a.name); // Descending order
    });
  }, [athletes]);

  const handleSquadSelect = (squad: Squad) => {
    setSelectedSquad(squad);
  };

  const handleBack = () => {
    setSelectedSquad(null);
  };

  const handleSelectAll = (squadAthletes: Athlete[]) => {
    const allSelected = squadAthletes.every(athlete =>
      selectedAthletes.includes(athlete.id)
    );

    squadAthletes.forEach(athlete => {
      onSelectionChange(athlete.id, !allSelected);
    });
  };

  // If a squad is selected, show the athlete list for that squad
  if (selectedSquad) {
    return (
      <Box sx={{ width: '100%' }}>
        {/* Header with back button */}
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
            onClick={handleBack}
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
            {selectedSquad.name}
          </Typography>

          <Typography
            variant="body2"
            onClick={() => handleSelectAll(selectedSquad.athletes)}
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '0.875rem',
              color: 'primary.main',
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Select all
          </Typography>
        </Box>

        {/* Athletes in selected squad */}
        <Box sx={{ overflow: 'auto' }}>
          {selectedSquad.athletes.map((athlete) => (
            <CompactAthleteCard
              key={athlete.id}
              athlete={athlete}
              isSelected={selectedAthletes.includes(athlete.id)}
              onToggle={onSelectionChange}
            />
          ))}
        </Box>
      </Box>
    );
  }

  // Show squad list
  return (
    <Paper elevation={0} sx={{ width: '100%' }}>
      <List sx={{ py: 0 }}>
        {squads.map((squad, index) => {
          const isHighlighted = squad.name === 'U23'; // Highlight U23s as shown in Figma
          
          return (
            <ListItem
              key={squad.id}
              disablePadding
              sx={{
                backgroundColor: isHighlighted ? 'action.selected' : 'transparent',
              }}
            >
              <ListItemButton
                onClick={() => handleSquadSelect(squad)}
                sx={{
                  px: 2,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: isHighlighted ? 'action.selected' : 'action.hover',
                  },
                }}
              >
                <ListItemText
                  primary={squad.name}
                  primaryTypographyProps={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: 'text.primary',
                  }}
                />
                <ChevronRightIcon 
                  fontSize="small" 
                  sx={{ color: 'text.secondary' }} 
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};
