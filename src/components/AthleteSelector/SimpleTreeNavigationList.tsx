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
import { GroupedAthleteList } from './GroupedAthleteList';
import { SortOption } from './SortMenu';
import { Athlete } from './types';

interface Squad {
  id: string;
  name: string;
  athletes: Athlete[];
}

interface SimpleTreeNavigationListProps {
  athletes: Athlete[];
  selectedAthletes: string[];
  onSelectionChange: (athleteId: string, selected: boolean) => void;
  sortBy: SortOption;
}

export const SimpleTreeNavigationList: React.FC<SimpleTreeNavigationListProps> = ({
  athletes,
  selectedAthletes,
  onSelectionChange,
  sortBy,
}) => {
  const theme = useTheme();
  const [selectedSquad, setSelectedSquad] = useState<Squad | null>(null);

  // Group athletes by squad/age group - ONLY ONE LEVEL
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

  // If a squad is selected, show the SAME grouped athlete list as accordion version
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
        </Box>

        {/* Use the SAME GroupedAthleteList as accordion version */}
        <Box sx={{ overflow: 'auto' }}>
          <GroupedAthleteList
            athletes={selectedSquad.athletes}
            selectedAthletes={selectedAthletes}
            onSelectionChange={onSelectionChange}
            sortBy={sortBy}
          />
        </Box>
      </Box>
    );
  }

  // Show simple squad list (matching Figma design exactly)
  return (
    <Paper elevation={0} sx={{ width: '100%' }}>
      <List sx={{ py: 0 }}>
        {squads.map((squad) => {
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
                  py: 1,
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
