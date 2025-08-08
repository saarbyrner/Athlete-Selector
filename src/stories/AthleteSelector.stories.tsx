import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
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
  DrawerAthleteSelector,
  DropdownAthleteSelector,
  AthleteSelectorContent,
  ExpandableSquadSelector,
  GroupedAthleteList,
  SortMenu,
  CompactAthleteCard,
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
    error: {
      main: '#d32f2f',
      dark: '#c62828',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ef6c00',
      dark: '#e65100',
      contrastText: '#ffffff',
    },
    info: {
      main: '#0288d1',
      dark: '#01579b',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2e7d32',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#3b4960',
      secondary: 'rgba(59, 73, 96, 0.6)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    action: {
      active: 'rgba(59, 73, 96, 0.56)',
      hover: 'rgba(59, 73, 96, 0.04)',
      selected: 'rgba(59, 73, 96, 0.08)',
      disabled: 'rgba(59, 73, 96, 0.26)',
      disabledBackground: 'rgba(59, 73, 96, 0.12)',
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
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
    caption: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    button: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.71,
      textTransform: 'none',
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
        sizeLarge: {
          fontSize: '0.9375rem',
          lineHeight: 1.73,
          padding: '8px 22px',
        },
        sizeMedium: {
          fontSize: '0.875rem',
          lineHeight: 1.71,
          padding: '6px 16px',
        },
        sizeSmall: {
          fontSize: '0.8125rem',
          lineHeight: 1.69,
          padding: '4px 10px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Open Sans", sans-serif',
          fontWeight: 400,
          fontSize: '0.8125rem',
          lineHeight: 1.38,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            fontFamily: '"Open Sans", sans-serif',
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1,
          },
          '& .MuiInputBase-input': {
            fontFamily: '"Open Sans", sans-serif',
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
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

const meta: Meta = {
  title: 'AthleteSelector/Accordion Version',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ p: 2, minHeight: '100vh', backgroundColor: 'background.default' }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The AthleteSelector component provides a consistent interface for selecting athletes that can be used in both Drawer and Dropdown contexts. 

## Features
- **Responsive Design**: Automatically adapts to mobile and desktop layouts
- **Flexible Container**: Works in Drawer, Popover, or standalone contexts
- **Hierarchical Organization**: Groups athletes by age group and position
- **Batch Selection**: Select/clear all athletes in a group
- **Search & Filter**: Real-time search with filtering capabilities
- **Status Indicators**: Visual status chips for availability
- **Consistent Styling**: Uses Material-UI components throughout

## Usage Patterns
- **Drawer**: For full-screen selection experiences
- **Dropdown**: For inline selection in forms or toolbars
- **Standalone**: For embedded selection interfaces
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component for stories that need state management
const StatefulWrapper = ({ 
  children, 
  initialSelection = [] 
}: { 
  children: (props: { 
    selectedAthletes: string[]; 
    onSelectionChange: (selection: string[]) => void;
  }) => React.ReactNode;
  initialSelection?: string[];
}) => {
  const [selectedAthletes, setSelectedAthletes] = useState<string[]>(initialSelection);

  const handleSelectionChange = (newSelection: string[]) => {
    setSelectedAthletes(newSelection);
    action('onSelectionChange')(newSelection);
  };

  return (
    <>
      {children({ selectedAthletes, onSelectionChange: handleSelectionChange })}
    </>
  );
};

// Drawer Stories
export const DrawerDefault: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => {
        const [open, setOpen] = useState(false);
        
        return (
          <>
            <Button 
              variant="contained" 
              onClick={() => setOpen(true)}
            >
              Open Athlete Selector (Drawer)
            </Button>
            <DrawerAthleteSelector
              open={open}
              onClose={() => setOpen(false)}
              athletes={mockAthletes}
              selectedAthletes={selectedAthletes}
              onSelectionChange={onSelectionChange}
              title="Select Athletes"
              showBackButton={false}
            />
          </>
        );
      }}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default drawer implementation with right-side slide-out panel. Automatically becomes full-screen on mobile devices.',
      },
    },
  },
};

export const DrawerWithBackButton: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => {
        const [open, setOpen] = useState(false);
        
        return (
          <>
            <Button 
              variant="contained" 
              onClick={() => setOpen(true)}
            >
              Open with Back Button
            </Button>
            <DrawerAthleteSelector
              open={open}
              onClose={() => setOpen(false)}
              athletes={mockAthletes}
              selectedAthletes={selectedAthletes}
              onSelectionChange={onSelectionChange}
              title="Team Selection"
              showBackButton={true}
              onBack={action('onBack')}
              anchor="right"
              width={500}
            />
          </>
        );
      }}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Drawer with back button navigation and custom width. Useful for multi-step workflows.',
      },
    },
  },
};

export const DrawerLeftAnchor: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => {
        const [open, setOpen] = useState(false);
        
        return (
          <>
            <Button 
              variant="outlined" 
              onClick={() => setOpen(true)}
            >
              Open Left Drawer
            </Button>
            <DrawerAthleteSelector
              open={open}
              onClose={() => setOpen(false)}
              athletes={mockAthletes}
              selectedAthletes={selectedAthletes}
              onSelectionChange={onSelectionChange}
              title="Athletes"
              anchor="left"
              width={400}
            />
          </>
        );
      }}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Left-anchored drawer variant. Useful for navigation-style layouts.',
      },
    },
  },
};

// Dropdown Stories
export const DropdownDefault: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
          <DropdownAthleteSelector
            athletes={mockAthletes}
            selectedAthletes={selectedAthletes}
            onSelectionChange={onSelectionChange}
            buttonText="Select Athletes"
            buttonVariant="outlined"
            showBadge={true}
          />
          <Typography variant="body2" color="text.secondary">
            {selectedAthletes.length > 0 
              ? `${selectedAthletes.length} athletes selected`
              : 'No athletes selected'
            }
          </Typography>
        </Box>
      )}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default dropdown implementation with badge showing selection count. Perfect for forms and inline selection.',
      },
    },
  },
};

export const DropdownVariants: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => (
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant="h6" gutterBottom>
            Button Variants
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <DropdownAthleteSelector
              athletes={mockAthletes}
              selectedAthletes={selectedAthletes}
              onSelectionChange={onSelectionChange}
              buttonText="Contained"
              buttonVariant="contained"
              buttonColor="primary"
              maxWidth={350}
            />
            
            <DropdownAthleteSelector
              athletes={mockAthletes}
              selectedAthletes={selectedAthletes}
              onSelectionChange={onSelectionChange}
              buttonText="Outlined"
              buttonVariant="outlined"
              buttonColor="primary"
              maxWidth={350}
            />
            
            <DropdownAthleteSelector
              athletes={mockAthletes}
              selectedAthletes={selectedAthletes}
              onSelectionChange={onSelectionChange}
              buttonText="Text"
              buttonVariant="text"
              buttonColor="primary"
              showBadge={false}
              maxWidth={350}
            />
          </Box>
        </Box>
      )}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different button variants and styling options for the dropdown trigger.',
      },
    },
  },
};

export const DropdownCompact: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => (
        <Box sx={{ maxWidth: 300 }}>
          <DropdownAthleteSelector
            athletes={mockAthletes}
            selectedAthletes={selectedAthletes}
            onSelectionChange={onSelectionChange}
            buttonText="Quick Select"
            buttonVariant="contained"
            maxWidth={280}
            maxHeight={400}
          />
        </Box>
      )}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact dropdown with constrained dimensions. Automatically switches to compact mode.',
      },
    },
  },
};

// Standalone Content Stories
export const StandaloneContent: Story = {
  render: () => (
    <StatefulWrapper initialSelection={['adams-john', 'byrne-john']}>
      {({ selectedAthletes, onSelectionChange }) => (
        <Box sx={{ 
          maxWidth: 500, 
          mx: 'auto', 
          border: 1, 
          borderColor: 'divider', 
          borderRadius: 2,
          overflow: 'hidden',
        }}>
          <AthleteSelectorContent
            athletes={mockAthletes}
            selectedAthletes={selectedAthletes}
            onSelectionChange={onSelectionChange}
            title="Team Roster"
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
        story: 'Standalone content component that can be embedded directly in any container. Useful for dedicated selection pages.',
      },
    },
  },
};

export const StandaloneCompact: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => (
        <Box sx={{ 
          maxWidth: 350, 
          mx: 'auto', 
          border: 1, 
          borderColor: 'divider', 
          borderRadius: 2,
          overflow: 'hidden',
        }}>
          <AthleteSelectorContent
            athletes={mockAthletes}
            selectedAthletes={selectedAthletes}
            onSelectionChange={onSelectionChange}
            title="Athletes"
            maxHeight={500}
            compact={true}
            onClose={action('onClose')}
          />
        </Box>
      )}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact standalone version with reduced spacing and smaller elements. Perfect for sidebar implementations.',
      },
    },
  },
};

// Loading and Error States
export const LoadingState: Story = {
  render: () => (
    <Box sx={{ 
      maxWidth: 400, 
      mx: 'auto', 
      border: 1, 
      borderColor: 'divider', 
      borderRadius: 2,
      overflow: 'hidden',
    }}>
      <AthleteSelectorContent
        athletes={[]}
        selectedAthletes={[]}
        onSelectionChange={action('onSelectionChange')}
        title="Loading Athletes"
        loading={true}
        maxHeight={400}
      />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading state display while athlete data is being fetched.',
      },
    },
  },
};

export const ErrorState: Story = {
  render: () => (
    <Box sx={{ 
      maxWidth: 400, 
      mx: 'auto', 
      border: 1, 
      borderColor: 'divider', 
      borderRadius: 2,
      overflow: 'hidden',
    }}>
      <AthleteSelectorContent
        athletes={[]}
        selectedAthletes={[]}
        onSelectionChange={action('onSelectionChange')}
        title="Athletes"
        error="Failed to load athletes. Please try again."
        maxHeight={400}
      />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Error state display when athlete data fails to load.',
      },
    },
  },
};

// Responsive Demo
export const ResponsiveDemo: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => {
        const [drawerOpen, setDrawerOpen] = useState(false);
        
        return (
          <Box sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Responsive Athlete Selection Demo
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Resize your browser window to see how the components adapt to different screen sizes.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
              <Button 
                variant="contained" 
                onClick={() => setDrawerOpen(true)}
              >
                Open Drawer (Responsive)
              </Button>
              
              <DropdownAthleteSelector
                athletes={mockAthletes}
                selectedAthletes={selectedAthletes}
                onSelectionChange={onSelectionChange}
                buttonText="Dropdown (Responsive)"
                buttonVariant="outlined"
              />
            </Box>
            
            <Typography variant="body2" color="text.secondary">
              Current selection: {selectedAthletes.length} athletes
            </Typography>
            
            <DrawerAthleteSelector
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              athletes={mockAthletes}
              selectedAthletes={selectedAthletes}
              onSelectionChange={onSelectionChange}
              title="Responsive Athlete Selector"
            />
          </Box>
        );
      }}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of responsive behavior. On mobile devices, the drawer becomes full-screen and the dropdown adapts its sizing.',
      },
    },
  },
};

// Expandable Squad Selector Stories
export const ExpandableSquadSelectorDemo: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => {
        const [selectedSquad, setSelectedSquad] = useState('current');
        
        return (
          <Box sx={{ maxWidth: 400, mx: 'auto', p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Expandable Squad Selector
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Click the squad selector to see the expandable menu that matches your Figma design.
            </Typography>
            
            <ExpandableSquadSelector
              selectedSquad={selectedSquad}
              onSquadChange={setSelectedSquad}
              selectedCount={selectedAthletes.length}
            />
            
            <Box sx={{ mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
              <Typography variant="body2">
                Selected Squad: <strong>{selectedSquad}</strong>
              </Typography>
              <Typography variant="body2">
                Selected Athletes: <strong>{selectedAthletes.length}</strong>
              </Typography>
            </Box>
          </Box>
        );
      }}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The expandable squad selector that matches your Figma design. It provides a full-width dropdown with multiple filter options including Selected, Current squads, Labels, Groups, Status, Position groups, and Historical squads.',
      },
    },
  },
};

export const FullSelectorWithExpandableSquads: Story = {
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
          <AthleteSelectorContent
            athletes={mockAthletes}
            selectedAthletes={selectedAthletes}
            onSelectionChange={onSelectionChange}
            title="Athletes with New Squad Selector"
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
        story: 'Complete athlete selector with the new expandable squad selector that takes over the available space, matching your Figma design perfectly.',
      },
    },
  },
};

// New Grouped List Stories
export const GroupedAthleteListDemo: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => {
        const [sortBy, setSortBy] = useState<'squad' | 'status' | 'position'>('position');
        
        return (
          <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Grouped Athlete List
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Athletes grouped by position with compact spacing, perfect for up to 300 athletes.
            </Typography>
            
            <Box sx={{ 
              border: 1, 
              borderColor: 'divider', 
              borderRadius: 2,
              overflow: 'hidden',
              maxHeight: 600,
            }}>
              <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1">Sort by: {sortBy}</Typography>
                <SortMenu
                  currentSort={sortBy}
                  onSortChange={setSortBy}
                />
              </Box>
              
              <Box sx={{ overflow: 'auto', maxHeight: 500 }}>
                <GroupedAthleteList
                  athletes={mockAthletes}
                  selectedAthletes={selectedAthletes}
                  onSelectionChange={(athleteId, selected) => {
                    const newSelection = selected
                      ? [...selectedAthletes, athleteId]
                      : selectedAthletes.filter(id => id !== athleteId);
                    onSelectionChange(newSelection);
                  }}
                  sortBy={sortBy}
                />
              </Box>
            </Box>
          </Box>
        );
      }}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Grouped athlete list component that organizes athletes by position, squad, or status. Features compact spacing optimized for large lists (up to 300 athletes) and includes "Select all" functionality for each group.',
      },
    },
  },
};

export const CompactAthleteCardDemo: Story = {
  render: () => (
    <StatefulWrapper>
      {({ selectedAthletes, onSelectionChange }) => (
        <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Compact Athlete Cards
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Individual athlete cards with compact spacing and status chips.
          </Typography>
          
          <Box sx={{ 
            border: 1, 
            borderColor: 'divider', 
            borderRadius: 2,
            overflow: 'hidden',
          }}>
            {mockAthletes.slice(0, 6).map((athlete) => (
              <CompactAthleteCard
                key={athlete.id}
                athlete={athlete}
                isSelected={selectedAthletes.includes(athlete.id)}
                onToggle={(athleteId) => {
                  const isSelected = selectedAthletes.includes(athleteId);
                  const newSelection = isSelected
                    ? selectedAthletes.filter(id => id !== athleteId)
                    : [...selectedAthletes, athleteId];
                  onSelectionChange(newSelection);
                }}
              />
            ))}
          </Box>
        </Box>
      )}
    </StatefulWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Compact athlete card component matching the Figma design. Features minimal spacing, status chips, and support for both regular athletes and aggregate/group entries.',
      },
    },
  },
};


