import React from 'react';
import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import { AthleteSelectorTreeContent } from './AthleteSelectorTreeContent';
import { AthleteSelectorContentProps } from './types';

interface DrawerAthleteSelectorTreeProps extends Omit<AthleteSelectorContentProps, 'onClose'> {
  open: boolean;
  onClose: () => void;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
}

export const DrawerAthleteSelectorTree: React.FC<DrawerAthleteSelectorTreeProps> = ({
  open,
  onClose,
  anchor = 'right',
  athletes,
  selectedAthletes,
  onSelectionChange,
  title = 'Select Athletes',
  maxHeight,
  ...props
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      variant="temporary"
      sx={{
        '& .MuiDrawer-paper': {
          width: isMobile ? '100vw' : 500,
          maxWidth: '100vw',
          height: '100vh',
          maxHeight: '100vh',
          boxShadow: theme.shadows[16],
          borderRadius: isMobile ? '16px 16px 0 0' : 0,
        },
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile
      }}
    >
      <AthleteSelectorTreeContent
        athletes={athletes}
        selectedAthletes={selectedAthletes}
        onSelectionChange={onSelectionChange}
        onClose={onClose}
        title={title}
        compact={isMobile}
        maxHeight="100%"
        {...props}
      />
    </Drawer>
  );
};
