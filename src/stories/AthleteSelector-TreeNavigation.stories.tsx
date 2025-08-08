import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
  Box,
  Button,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import {
  AthleteSelectorTreeContent,
  DrawerAthleteSelectorTree,
  DropdownAthleteSelectorTree,
  SimpleTreeNavigationList,
} from '../components/AthleteSelector';
import { mockAthletes } from '../components/AthleteSelector/mockData';
import { Athlete } from '../components/AthleteSelector/types';

// Create a custom theme matching the MUI design system
const theme = createTheme({
  palette: {
    primary: {
      main: '#3b4960',
      dark: '#3b4960',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f1f2f3',
      dark: '#f1f2f3',
      contrastText: '#3b4960',
    },
    success: {
      main: '#0a875a',
      contrastText: '#ffffff',
    },
    error: {
      main: '#d32f2f',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ed6c02',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0288d1',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#3b4960',
      secondary: 'rgba(59, 73, 96, 0.6)',
    },
    action: {
      selected: 'rgba(59, 73, 96, 0.04)',
      hover: 'rgba(59, 73, 96, 0.04)',
    },
    divider: 'rgba(59, 73, 96, 0.12)',
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h5: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.6,
    },
    h6: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.66,
    },
    caption: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: '"Open Sans", sans-serif',
        },
        sizeSmall: {
          fontSize: '0.875rem',
          padding: '4px 8px',
        },
        sizeMedium: {
          fontSize: '0.875rem',
          padding: '6px 16px',
        },
        sizeLarge: {
          fontSize: '1rem',
          padding: '8px 24px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Open Sans", sans-serif',
        },
        sizeSmall: {
          fontSize: '0.8125rem',
          height: 24,
        },
        sizeMedium: {
          fontSize: '0.8125rem',
          height: 32,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            fontFamily: '"Open Sans", sans-serif',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontFamily: '"Open Sans", sans-serif',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Open Sans", sans-serif',
        },
      },
    },
  },
});

// Stateful wrapper component for managing selections
interface StatefulWrapperProps {
  children: (props: {
    selectedAthletes: string[];
    onSelectionChange: (selection: string[]) => void;
  }) => React.ReactNode;
}

const StatefulWrapper: React.FC<StatefulWrapperProps> = ({ children }) => {
  const [selectedAthletes, setSelectedAthletes] = useState<string[]>([]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children({
        selectedAthletes,
        onSelectionChange: setSelectedAthletes,
      })}
    </ThemeProvider>
  );
};

const meta: Meta = {
  title: 'AthleteSelector/Tree Navigation Version',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Tree navigation version of the Athlete Selector. Simple one-level tree for squad selection, then identical functionality to accordion version.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

// Basic Tree Navigation Stories
export const SimpleTreeNavigationDemo: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => (
        <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Simple Tree Navigation
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Click any squad to drill down and see athletes grouped by position (same as accordion version).
          </Typography>
          
          <Box sx={{ 
            border: 1, 
            borderColor: 'divider', 
            borderRadius: 2,
            overflow: 'hidden',
            maxHeight: 600,
          }}>
            <SimpleTreeNavigationList
              athletes={mockAthletes}
              selectedAthletes={selectedAthletes}
              onSelectionChange={(athleteId, selected) => {
                const newSelection = selected
                  ? [...selectedAthletes, athleteId]
                  : selectedAthletes.filter(id => id !== athleteId);
                onSelectionChange(newSelection);
              }}
              sortBy="position"
            />
          </Box>
        </Box>
      )}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Simple tree navigation matching your Figma design. One level of tree navigation for squad selection, then identical grouped athlete list as accordion version.',
      },
    },
  },
};

export const FullTreeSelectorDemo: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => (
        <Box sx={{ 
          maxWidth: 500, 
          mx: 'auto', 
          border: 1, 
          borderColor: 'divider', 
          borderRadius: 2,
          overflow: 'hidden',
        }}>
          <AthleteSelectorTreeContent
            athletes={mockAthletes}
            selectedAthletes={selectedAthletes}
            onSelectionChange={onSelectionChange}
            title="Athletes - Tree Navigation"
            maxHeight={600}
            onClose={action('onClose')}
          />
        </Box>
      )}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete tree navigation athlete selector with search, sort, and squad selection. Same functionality as accordion version but with tree navigation for squad selection.',
      },
    },
  },
};

export const DrawerTreeNavigation: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => {
        const [drawerOpen, setDrawerOpen] = useState(false);
        
        return (
          <Box sx={{ p: 3 }}>
            <Button
              variant="contained"
              onClick={() => setDrawerOpen(true)}
              sx={{ mb: 2 }}
            >
              Open Tree Navigation Drawer
            </Button>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Selected Athletes: {selectedAthletes.length}
            </Typography>
            
            <DrawerAthleteSelectorTree
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              athletes={mockAthletes}
              selectedAthletes={selectedAthletes}
              onSelectionChange={onSelectionChange}
              title="Select Athletes"
              maxHeight={600}
            />
          </Box>
        );
      }}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tree navigation version in a drawer. Perfect for mobile and desktop, with simple squad tree navigation.',
      },
    },
  },
};

export const DropdownTreeNavigation: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => {
        const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
        
        return (
          <Box sx={{ p: 3 }}>
            <Button
              variant="contained"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              sx={{ mb: 2 }}
            >
              Open Tree Navigation Dropdown
            </Button>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Selected Athletes: {selectedAthletes.length}
            </Typography>
            
            <DropdownAthleteSelectorTree
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={() => setAnchorEl(null)}
              athletes={mockAthletes}
              selectedAthletes={selectedAthletes}
              onSelectionChange={onSelectionChange}
              title="Select Athletes"
              maxHeight={600}
            />
          </Box>
        );
      }}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tree navigation version in a dropdown/popover. Compact presentation with simple tree navigation.',
      },
    },
  },
};

export const ResponsiveTreeBehavior: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => {
        const [drawerOpen, setDrawerOpen] = useState(false);
        const [dropdownAnchor, setDropdownAnchor] = useState<HTMLElement | null>(null);
        
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Responsive Tree Navigation
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Button
                variant="contained"
                onClick={() => setDrawerOpen(true)}
              >
                Mobile/Tablet (Drawer)
              </Button>
              
              <Button
                variant="outlined"
                onClick={(e) => setDropdownAnchor(e.currentTarget)}
              >
                Desktop (Dropdown)
              </Button>
            </Box>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Tree navigation adapts to different screen sizes and contexts
            </Typography>
            
            <DrawerAthleteSelectorTree
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              athletes={mockAthletes}
              selectedAthletes={selectedAthletes}
              onSelectionChange={onSelectionChange}
              title="Mobile Tree Navigation"
            />
            
            <DropdownAthleteSelectorTree
              open={Boolean(dropdownAnchor)}
              anchorEl={dropdownAnchor}
              onClose={() => setDropdownAnchor(null)}
              athletes={mockAthletes}
              selectedAthletes={selectedAthletes}
              onSelectionChange={onSelectionChange}
              title="Desktop Tree Navigation"
            />
          </Box>
        );
      }}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of responsive behavior. Tree navigation version adapts to mobile (drawer) and desktop (dropdown) contexts.',
      },
    },
  },
};
