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
import { SimpleTreeNavigationList } from './SimpleTreeNavigationList';
import { SortMenu } from './SortMenu';
import { AthleteSelectorContentProps, FilterOptions, GroupBy, SortOrder } from './types';
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

  const [groupBy, setGroupBy] = useState<GroupBy>('position');
  const [order, setOrder] = useState<SortOrder>('asc');
  const [menuSelection, setMenuSelection] = useState<string>('current');

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
    // Map the new squad selector options to our existing filter logic
    let filterValue = 'all';
    setMenuSelection(squadId);
    switch (squadId) {
      case 'current':
        filterValue = 'current';
        setGroupBy('squad');
        break;
      case 'status':
        setGroupBy('status');
        break;
      case 'position-groups':
      case 'selected':
        setGroupBy('position');
        break;
      default:
        // keep current grouping
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

        {/* Selected Athletes Chip - Separate Row */}
        <Stack spacing={1}>
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
        <SimpleTreeNavigationList
          athletes={viewAthletes}
          selectedAthletes={selectedAthletes}
          onSelectionChange={handleAthleteSelection}
          sortBy={groupBy}
          order={order}
        />
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
