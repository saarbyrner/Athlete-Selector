import React from 'react';
import {
  Drawer,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { AthleteSelectorContent } from './AthleteSelectorContent';
import { AthleteSelectorProps } from './types';

interface DrawerAthleteSelectorProps extends AthleteSelectorProps {
  open: boolean;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  width?: number | string;
}

export const DrawerAthleteSelector: React.FC<DrawerAthleteSelectorProps> = ({
  open,
  anchor = 'right',
  width = 460,
  onClose,
  ...props
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // On mobile, use full screen drawer
  const drawerWidth = isMobile ? '100vw' : width;
  const drawerAnchor = isMobile ? 'bottom' : anchor;

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor={drawerAnchor}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          maxWidth: '100vw',
          height: isMobile ? '90vh' : '100vh',
          maxHeight: '100vh',
          boxShadow: theme.shadows[16],
          borderRadius: isMobile ? '16px 16px 0 0' : 0,
        },
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile
        hideBackdrop: true,
      }}
    >
      <AthleteSelectorContent
        {...props}
        onClose={onClose}
        compact={isMobile}
        maxHeight="100%"
      />
    </Drawer>
  );
};
