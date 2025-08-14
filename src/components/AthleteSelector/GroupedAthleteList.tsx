import React, { useState } from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { CompactAthleteCard } from './CompactAthleteCard';
import { Athlete } from './types';
import { SortOption } from './SortMenu';

interface GroupedAthleteListProps {
  athletes: Athlete[];
  selectedAthletes: string[];
  onSelectionChange: (athleteId: string, selected: boolean) => void;
  sortBy: SortOption;
}

interface AthleteGroup {
  id: string;
  name: string;
  athletes: Athlete[];
  aggregateAthlete?: Athlete;
}

export const GroupedAthleteList: React.FC<GroupedAthleteListProps> = ({
  athletes,
  selectedAthletes,
  onSelectionChange,
  sortBy,
}) => {
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['Forward']); // Default expanded

  const handleToggle = (athleteId: string) => {
    const isSelected = selectedAthletes.includes(athleteId);
    onSelectionChange(athleteId, !isSelected);
  };

  const handleSelectAll = (groupAthletes: Athlete[]) => {
    const allSelected = groupAthletes.every(athlete => 
      selectedAthletes.includes(athlete.id)
    );
    
    groupAthletes.forEach(athlete => {
      onSelectionChange(athlete.id, !allSelected);
    });
  };

  const handleAccordionChange = (groupId: string) => (
    _event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpandedGroups(prev => 
      isExpanded 
        ? [...prev, groupId]
        : prev.filter(id => id !== groupId)
    );
  };

  // Group athletes based on sort option
  const groupAthletes = (athletes: Athlete[]): AthleteGroup[] => {
    const groups: { [key: string]: Athlete[] } = {};

    athletes.forEach(athlete => {
      let groupKey: string;
      
      switch (sortBy) {
        case 'position':
          groupKey = athlete.position;
          break;
        case 'status':
          groupKey = athlete.status;
          break;
        case 'squad':
        default:
          groupKey = athlete.ageGroup;
          break;
      }

      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(athlete);
    });

    return Object.entries(groups).map(([key, groupAthletes]) => {
      // Create aggregate athlete for position groups
      const aggregateAthlete: Athlete | undefined = sortBy === 'position' ? {
        id: `${key}-aggregate`,
        name: key,
        position: 'Aggregate',
        ageGroup: groupAthletes[0]?.ageGroup || 'U23',
        status: 'available' as const,
        avatar: '',
      } : undefined;

      return {
        id: key,
        name: key,
        athletes: groupAthletes,
        aggregateAthlete,
      };
    });
  };

  const athleteGroups = groupAthletes(athletes);

  return (
    <Box sx={{ width: '100%' }}>
      {athleteGroups.map((group, index) => {
        const isExpanded = expandedGroups.includes(group.id);
        // const groupSelectedCount = group.athletes.filter(athlete =>
        //   selectedAthletes.includes(athlete.id)
        // ).length;

        return (
          <Box key={group.id}>
            <Accordion
              expanded={isExpanded}
              onChange={handleAccordionChange(group.id)}
              elevation={0}
              sx={{
                '&:before': {
                  display: 'none',
                },
                '& .MuiAccordionSummary-root': {
                  minHeight: 48,
                  px: 2,
                  py: 0,
                  '&.Mui-expanded': {
                    minHeight: 48,
                  },
                },
                '& .MuiAccordionDetails-root': {
                  p: 0,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  flexDirection: 'row-reverse',
                  '& .MuiAccordionSummary-expandIconWrapper': {
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    mr: 1,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: '"Open Sans", sans-serif',
                      fontSize: '1rem',
                      fontWeight: 400,
                      color: 'text.primary',
                    }}
                  >
                    {group.name}
                  </Typography>
                  
                  <Button
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectAll(group.athletes);
                    }}
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
                    Select all
                  </Button>
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  {/* Show aggregate option for position groups */}
                  {group.aggregateAthlete && (
                    <CompactAthleteCard
                      athlete={group.aggregateAthlete}
                      isSelected={selectedAthletes.includes(group.aggregateAthlete.id)}
                      onToggle={handleToggle}
                      showGroupIcon={true}
                    />
                  )}

                  {/* Position subheader for position grouping */}
                  {sortBy === 'position' && (
                    <Box sx={{ px: 2, py: 0 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: 'text.primary',
                        }}
                      >
                        {group.name}
                      </Typography>
                    </Box>
                  )}

                  {/* Individual athletes */}
                  {group.athletes.map((athlete) => (
                    <CompactAthleteCard
                      key={athlete.id}
                      athlete={athlete}
                      isSelected={selectedAthletes.includes(athlete.id)}
                      onToggle={handleToggle}
                    />
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>

            {/* Divider between groups */}
            {index < athleteGroups.length - 1 && (
              <Divider sx={{ mx: 2 }} />
            )}
          </Box>
        );
      })}
    </Box>
  );
};
