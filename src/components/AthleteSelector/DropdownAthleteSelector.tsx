import React, { useState, useRef } from 'react';
import {
  Button,
  Popover,
  Paper,
  Badge,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import {
  ArrowDropDown as ArrowDropDownIcon,
  People as PeopleIcon,
} from '@mui/icons-material';
import { AthleteSelectorContent } from './AthleteSelectorContent';
import { AthleteSelectorProps } from './types';

interface DropdownAthleteSelectorProps extends Omit<AthleteSelectorProps, 'onClose'> {
  buttonText?: string;
  buttonVariant?: 'contained' | 'outlined' | 'text';
  buttonColor?: 'primary' | 'secondary' | 'inherit';
  showBadge?: boolean;
  maxWidth?: number | string;
  maxHeight?: number | string;
}

export const DropdownAthleteSelector: React.FC<DropdownAthleteSelectorProps> = ({
  selectedAthletes = [],
  buttonText = 'Select Athletes',
  buttonVariant = 'outlined',
  buttonColor = 'primary',
  showBadge = true,
  maxWidth = 400,
  maxHeight = 500,
  onSelectionChange,
  ...props
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectionChange = (newSelection: string[]) => {
    onSelectionChange(newSelection);
    // Don't auto-close on selection change to allow multiple selections
  };

  const buttonContent = (
    <Button
      ref={buttonRef}
      variant={buttonVariant}
      color={buttonColor}
      onClick={handleClick}
      endIcon={<ArrowDropDownIcon />}
      startIcon={<PeopleIcon />}
      sx={{
        textTransform: 'none',
        minWidth: isMobile ? '100%' : 'auto',
      }}
    >
      {selectedAthletes.length > 0
        ? `${selectedAthletes.length} ${selectedAthletes.length === 1 ? 'athlete' : 'athletes'} selected`
        : buttonText}
    </Button>
  );

  return (
    <Box sx={{ display: 'inline-block', width: isMobile ? '100%' : 'auto' }}>
      {showBadge && selectedAthletes.length > 0 ? (
        <Badge
          badgeContent={selectedAthletes.length}
          color="primary"
          max={99}
        >
          {buttonContent}
        </Badge>
      ) : (
        buttonContent
      )}

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: isMobile ? 'center' : 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: isMobile ? 'center' : 'left',
        }}
        sx={{
          '& .MuiPopover-paper': {
            mt: 1,
            maxWidth: isMobile ? '95vw' : maxWidth,
            maxHeight: isMobile ? '80vh' : maxHeight,
            minWidth: isMobile ? '90vw' : 350,
            borderRadius: 2,
            boxShadow: theme.shadows[8],
          },
        }}
        slotProps={{
          paper: {
            elevation: 8,
          },
        }}
      >
        <Paper>
          <AthleteSelectorContent
            {...props}
            selectedAthletes={selectedAthletes}
            onSelectionChange={handleSelectionChange}
            onClose={handleClose}
            compact={isMobile}
            maxHeight={isMobile ? '75vh' : maxHeight}
          />
        </Paper>
      </Popover>
    </Box>
  );
};
