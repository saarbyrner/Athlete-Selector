import React, { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  useTheme,
} from '@mui/material';
import { Sort as SortIcon } from '@mui/icons-material';

export type SortOption = 'squad' | 'status' | 'position';

interface SortMenuProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const sortOptions = [
  { value: 'squad' as const, label: 'Squad' },
  { value: 'status' as const, label: 'Status' },
  { value: 'position' as const, label: 'Position group' },
];

export const SortMenu: React.FC<SortMenuProps> = ({
  currentSort,
  onSortChange,
}) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortSelect = (sort: SortOption) => {
    onSortChange(sort);
    handleClose();
  };

  return (
    <>
      <IconButton
        size="small"
        onClick={handleClick}
        sx={{
          color: 'text.secondary',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        <SortIcon fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            minWidth: 160,
            mt: 0.5,
            '& .MuiMenuItem-root': {
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '0.875rem',
              py: 1,
            },
          },
        }}
      >
        {sortOptions.map((option) => (
          <MenuItem
            key={option.value}
            selected={currentSort === option.value}
            onClick={() => handleSortSelect(option.value)}
          >
            <ListItemText
              primary={option.label}
              sx={{
                '& .MuiTypography-root': {
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: '0.875rem',
                },
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
