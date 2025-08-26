import React, { useState, useMemo } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
  useTheme,
  useMediaQuery,
  Chip,
  Stack,
} from '@mui/material';
import {
  Search as SearchIcon,
  Close as CloseIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { ExpandableSquadSelector } from './ExpandableSquadSelector';
import { GroupedAthleteList } from './GroupedAthleteList';
import { SimpleTreeNavigationList } from './SimpleTreeNavigationList';
import { SortMenu } from './SortMenu';
import { AthleteSelectorContentProps, FilterOptions, SortOrder } from './types';
import {
  filterAthletes,
  sortAthletes,
} from './utils';
import { CompactAthleteCard } from './CompactAthleteCard';

export const AthleteSelectorTreeContent: React.FC<AthleteSelectorContentProps> = ({
  athletes,
  selectedAthletes = [],
  onSelectionChange,
  onClose,
  onBack,
  title = 'Athletes',
  showBackButton = false,
  maxHeight = 600,
  compact = false,
  loading = false,
  error,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isCompact = compact || isMobile;

  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: '',
    selectedAgeGroups: [],
    selectedPositions: [],
    selectedSquad: 'current',
    sortBy: 'name',
    sortOrder: 'asc',
  });

  const [order, setOrder] = useState<SortOrder>('asc');
  const [menuSelection, setMenuSelection] = useState<string>('squads');

  const filteredAthletes = useMemo(() => {
    const filtered = filterAthletes(athletes, filters);
    return sortAthletes(filtered, filters.sortBy, filters.sortOrder);
  }, [athletes, filters]);
  const viewAthletes = useMemo(() => {
    return menuSelection === 'selected'
      ? filteredAthletes.filter(a => selectedAthletes.includes(a.id))
      : filteredAthletes;
  }, [filteredAthletes, selectedAthletes, menuSelection]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, searchTerm: event.target.value }));
  };

  const handleSquadChange = (squadId: string) => {
    // Updated dropdown options:
    // - selected: show only selected and group by position
    // - squads: current squads list, group by squad by default
    // - free-agents: show empty listing for now
    // - historical: flat list of historical athletes, group by position
    let filterValue = 'all';
    setMenuSelection(squadId);
    switch (squadId) {
      case 'selected':
        filterValue = 'all';
        break;
      case 'squads':
        filterValue = 'current';
        break;
      case 'free-agents':
        filterValue = 'free-agents';
        break;
      case 'historical':
        filterValue = 'historical';
        break;
      default:
        filterValue = 'all';
        break;
    }
    setFilters(prev => ({ ...prev, selectedSquad: filterValue }));
  };

  const handleAthleteSelection = (athleteId: string, selected: boolean) => {
    const newSelection = selected
      ? [...selectedAthletes, athleteId]
      : selectedAthletes.filter(id => id !== athleteId);
    onSelectionChange(newSelection);
  };

  const handleBatchSelection = (athleteIds: string[], selected: boolean) => {
    let newSelection: string[];
    if (selected) {
      // Add all athlete IDs that aren't already selected
      newSelection = [...selectedAthletes, ...athleteIds.filter(id => !selectedAthletes.includes(id))];
    } else {
      // Remove all athlete IDs that are currently selected
      newSelection = selectedAthletes.filter(id => !athleteIds.includes(id));
    }
    onSelectionChange(newSelection);
  };

  const handleOrderChange = (next: SortOrder) => setOrder(next);

  if (loading) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography>Loading athletes...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        maxHeight: `${maxHeight}px`,
        bgcolor: 'background.paper',
        borderRadius: 1,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          py: 1,
          px: isCompact ? 2 : 3,
          borderBottom: '1px solid',
          borderColor: 'divider',
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
          {showBackButton && onBack && (
            <IconButton
              onClick={onBack}
              size={isCompact ? 'small' : 'medium'}
              sx={{ mr: 1 }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography
            variant={isCompact ? 'h6' : 'h5'}
            fontWeight="semibold"
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          {onClose && (
            <IconButton onClick={onClose} size={isCompact ? 'small' : 'medium'}>
              <CloseIcon />
            </IconButton>
          )}
        </Box>

        <Stack spacing={0.5}>
          {/* Controls - Single Row */}
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 0 }}>
          {/* Squad Selector */}
          <Box sx={{ minWidth: 140, flexShrink: 0 }}>
            <ExpandableSquadSelector
              selectedSquad={menuSelection}
              onSquadChange={handleSquadChange}
              selectedCount={selectedAthletes.length}
              compact={true}
            />
          </Box>
          
          {/* Search Field */}
          <TextField
            placeholder="Search"
            value={filters.searchTerm}
            onChange={handleSearchChange}
            size="small"
            sx={{ 
              flexGrow: 1,
              '& .MuiInputBase-root': {
                fontFamily: '"Open Sans", sans-serif',
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />

          {/* Sort Menu */}
          <SortMenu order={order} onChange={handleOrderChange} />
        </Box>
          {selectedAthletes.length > 0 && (
            <Box>
              <Chip
                label={`${selectedAthletes.length} selected`}
                color="primary"
                size="small"
                onDelete={() => onSelectionChange([])}
              />
            </Box>
          )}
        </Stack>
      </Box>

      {/* Content - Simple Tree Navigation */}
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        {menuSelection === 'historical' ? (
          <GroupedAthleteList
            athletes={viewAthletes}
            selectedAthletes={selectedAthletes}
            onSelectionChange={handleAthleteSelection}
            onBatchSelectionChange={handleBatchSelection}
            groupBy="position"
            order={order}
            showOnlySelected={false}
          />
        ) : menuSelection === 'free-agents' ? (
          filters.searchTerm.trim() === '' ? (
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Use search to find free agents
              </Typography>
            </Box>
          ) : (
            <>
              {(() => {
                const trimmed = filters.searchTerm.trim();
                const capitalized = trimmed
                  .split(' ')
                  .filter(Boolean)
                  .map(s => s.charAt(0).toUpperCase() + s.slice(1))
                  .join(' ');
                const mock = {
                  id: `free-agent-${trimmed.toLowerCase()}`,
                  name: capitalized || 'Free Agent',
                  position: 'Forward',
                  ageGroup: 'FA',
                  status: 'available' as const,
                  avatar: undefined,
                };
                const isSelected = selectedAthletes.includes(mock.id);
                return (
                  <CompactAthleteCard
                    athlete={mock}
                    isSelected={isSelected}
                    onToggle={(id) => handleAthleteSelection(id, !isSelected)}
                  />
                );
              })()}
            </>
          )
        ) : (
          <SimpleTreeNavigationList
            athletes={viewAthletes}
            selectedAthletes={selectedAthletes}
            onSelectionChange={handleAthleteSelection}
            onBatchSelectionChange={handleBatchSelection}
            order={order}
          />
        )}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          py: 1,
          px: isCompact ? 2 : 3,
          borderTop: '1px solid',
          borderColor: 'divider',
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={onClose}
            disabled={selectedAthletes.length === 0}
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              textTransform: 'none',
            }}
          >
            Done
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
