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
} from '@mui/material';
import {
  Search as SearchIcon,
  Close as CloseIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { ExpandableSquadSelector } from './ExpandableSquadSelector';
import { SimpleTreeNavigationList } from './SimpleTreeNavigationList';
import { SortMenu, SortOption } from './SortMenu';
import { AthleteSelectorContentProps, FilterOptions } from './types';
import {
  filterAthletes,
  sortAthletes,
} from './utils';

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

  const [sortBy, setSortBy] = useState<SortOption>('position');

  const filteredAthletes = useMemo(() => {
    const filtered = filterAthletes(athletes, filters);
    return sortAthletes(filtered, filters.sortBy, filters.sortOrder);
  }, [athletes, filters]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, searchTerm: event.target.value }));
  };

  const handleSquadChange = (squadId: string) => {
    // Map the new squad selector options to our existing filter logic
    let filterValue = squadId;
    switch (squadId) {
      case 'selected':
        // Show only selected athletes - we'll handle this differently
        filterValue = 'all';
        break;
      case 'current':
        filterValue = 'current';
        break;
      case 'labels':
      case 'groups':
      case 'status':
      case 'position-groups':
      case 'historical':
        filterValue = 'all'; // For now, these show all athletes
        break;
      default:
        filterValue = 'all';
    }
    setFilters(prev => ({ ...prev, selectedSquad: filterValue }));
  };

  const handleAthleteSelection = (athleteId: string, selected: boolean) => {
    const newSelection = selected
      ? [...selectedAthletes, athleteId]
      : selectedAthletes.filter(id => id !== athleteId);
    onSelectionChange(newSelection);
  };

  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort);
  };

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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          py: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {showBackButton && onBack && (
            <IconButton
              onClick={onBack}
              size="small"
              sx={{ mr: 1 }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography variant="h6" color="text.primary">
            {title}
          </Typography>
        </Box>
        {onClose && (
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <Box
        sx={{
          px: 3,
          py: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
          flexShrink: 0,
        }}
      >
        {/* Controls - Single Row */}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 1 }}>
          {/* Squad Selector */}
          <Box sx={{ minWidth: 140, flexShrink: 0 }}>
            <ExpandableSquadSelector
              selectedSquad={filters.selectedSquad === 'current' ? 'current' : 'all'}
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
          <SortMenu
            currentSort={sortBy}
            onSortChange={handleSortChange}
          />
        </Box>

        {/* Selected Athletes Chip - Separate Row */}
        {selectedAthletes.length > 0 && (
          <Box>
            <Chip
              label={`${selectedAthletes.length} selected`}
              color="primary"
              variant="outlined"
              size="small"
              onDelete={() => onSelectionChange([])}
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '0.75rem',
              }}
            />
          </Box>
        )}
      </Box>

      {/* Content - Simple Tree Navigation */}
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        <SimpleTreeNavigationList
          athletes={filteredAthletes}
          selectedAthletes={selectedAthletes}
          onSelectionChange={handleAthleteSelection}
          sortBy={sortBy}
        />
      </Box>

      {/* Footer */}
      <Box
        sx={{
          p: isCompact ? 2 : 3,
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
