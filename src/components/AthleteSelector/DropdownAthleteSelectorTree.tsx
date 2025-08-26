import React from 'react';
import { Popover, useMediaQuery, useTheme } from '@mui/material';
import { AthleteSelectorTreeContent } from './AthleteSelectorTreeContent';
import { AthleteSelectorContentProps } from './types';

interface DropdownAthleteSelectorTreeProps extends Omit<AthleteSelectorContentProps, 'onClose'> {
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
}

export const DropdownAthleteSelectorTree: React.FC<DropdownAthleteSelectorTreeProps> = ({
  open,
  onClose,
  anchorEl,
  athletes,
  selectedAthletes,
  onSelectionChange,
  title = 'Select Athletes',
  maxHeight = 600,
  ...props
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      PaperProps={{
        sx: {
          width: isMobile ? '90vw' : 500,
          maxWidth: '95vw',
          // Static height to eliminate jumpiness
          height: isMobile ? '75vh' : maxHeight,
          minHeight: isMobile ? '75vh' : maxHeight,
          overflow: 'hidden',
        },
      }}
    >
      <AthleteSelectorTreeContent
        athletes={athletes}
        selectedAthletes={selectedAthletes}
        onSelectionChange={onSelectionChange}
        onClose={onClose}
        title={title}
        compact={isMobile}
        maxHeight={maxHeight}
        {...props}
      />
    </Popover>
  );
};
