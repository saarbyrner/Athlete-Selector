import React, { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  MenuList,
  MenuItem,
  Typography,
  Collapse,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  ArrowDropUp as ArrowDropUpIcon,
  ArrowDropDown as ArrowDropDownIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';

interface SquadOption {
  id: string;
  label: string;
  count?: number;
  hasSubmenu?: boolean;
}

interface ExpandableSquadSelectorProps {
  selectedSquad: string;
  onSquadChange: (squad: string) => void;
  selectedCount?: number;
  compact?: boolean;
}

const squadOptions: SquadOption[] = [
  { id: 'selected', label: 'Selected', count: 1 },
  { id: 'current', label: 'Current squads' },
  { id: 'labels', label: 'Labels' },
  { id: 'groups', label: 'Groups' },
  { id: 'status', label: 'Status' },
  { id: 'position-groups', label: 'Position groups' },
  { id: 'historical', label: 'Historical squads', hasSubmenu: true },
];

export const ExpandableSquadSelector: React.FC<ExpandableSquadSelectorProps> = ({
  selectedSquad,
  onSquadChange,
  selectedCount = 0,
  compact = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOptionSelect = (optionId: string) => {
    onSquadChange(optionId);
    if (!isMobile) {
      setIsExpanded(false);
    }
  };

  const getSelectedLabel = () => {
    const option = squadOptions.find(opt => opt.id === selectedSquad);
    return option?.label || 'Current squads';
  };

  const getDisplayLabel = (option: SquadOption) => {
    if (option.id === 'selected' && selectedCount > 0) {
      return `${option.label} (${selectedCount})`;
    }
    return option.label;
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      {/* Toggle Button */}
      <Button
        onClick={handleToggle}
        variant="text"
        endIcon={isExpanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          textTransform: 'none',
          fontFamily: '"Open Sans", sans-serif',
          fontSize: compact ? '0.875rem' : '1rem',
          fontWeight: 400,
          color: 'text.primary',
          px: compact ? 1.5 : 2,
          py: compact ? 1 : 1.5,
          minHeight: compact ? 36 : 44,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          backgroundColor: 'background.paper',
          '&:hover': {
            backgroundColor: 'action.hover',
            borderColor: 'primary.main',
          },
        }}
      >
        {getSelectedLabel()}
      </Button>

      {/* Expandable Menu */}
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <Paper
          elevation={8}
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: theme.zIndex.modal,
            maxHeight: isMobile ? '70vh' : '400px',
            overflowY: 'auto',
            mt: 0.5,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
          }}
        >
          <MenuList
            sx={{
              py: 1,
              '& .MuiMenuItem-root': {
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '1rem',
                fontWeight: 400,
                px: 2,
                py: 1.5,
                minHeight: 'auto',
              },
            }}
          >
            {squadOptions.map((option) => (
              <MenuItem
                key={option.id}
                selected={selectedSquad === option.id}
                onClick={() => handleOptionSelect(option.id)}
                sx={{
                  backgroundColor: selectedSquad === option.id 
                    ? 'action.selected' 
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: selectedSquad === option.id 
                      ? 'action.selected' 
                      : 'action.hover',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'action.selected',
                    '&:hover': {
                      backgroundColor: 'action.selected',
                    },
                  },
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: 'text.primary',
                    flexGrow: 1,
                  }}
                >
                  {getDisplayLabel(option)}
                </Typography>
                
                {option.hasSubmenu && (
                  <ChevronRightIcon 
                    fontSize="small" 
                    sx={{ 
                      color: 'text.secondary',
                      ml: 1,
                    }} 
                  />
                )}
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Collapse>
    </Box>
  );
};
