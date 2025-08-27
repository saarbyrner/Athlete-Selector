import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Switch, FormControlLabel, Stack, Typography, Paper } from '@mui/material';
import { PlayerProfileHoverCard } from '../components/AthleteSelector';
import { mockAthletes } from '../components/AthleteSelector/mockData';

const theme = createTheme({
  palette: {
    primary: { main: '#3b4960', dark: '#3b4960', contrastText: '#ffffff' },
    secondary: { main: '#f1f2f3', dark: '#f1f2f3', contrastText: '#3b4960' },
    success: { main: '#0a875a', contrastText: '#ffffff' },
    error: { main: '#d32f2f', contrastText: '#ffffff' },
    warning: { main: '#ed6c02', contrastText: '#ffffff' },
    info: { main: '#0288d1', contrastText: '#ffffff' },
    text: { primary: '#3b4960', secondary: 'rgba(59, 73, 96, 0.6)' },
    action: { selected: 'rgba(59, 73, 96, 0.04)', hover: 'rgba(59, 73, 96, 0.04)' },
    divider: 'rgba(59, 73, 96, 0.12)',
    background: { default: '#ffffff', paper: '#ffffff' },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
  shape: { borderRadius: 4 },
});

const meta: Meta = {
  title: 'AthleteSelector/Player Profile Card',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Hover-triggered tooltip-style player profile with avatar, position, squads, DOB, squad number, league ID, availability, and labels.',
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

const BasicStoryComponent: React.FC = () => {
  const athlete = mockAthletes[0];
  const [enabled, setEnabled] = useState(true);
  return (
    <Box sx={{ p: 3 }}>
      <FormControlLabel
        control={<Switch checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />}
        label="Enable profile card"
      />

      <Paper variant="outlined" sx={{ p: 2, mt: 2 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Hover the avatar/name to see the profile card
        </Typography>

        <PlayerProfileHoverCard
          athlete={athlete}
          squads={[athlete.ageGroup, 'First Team']}
          dateOfBirth="2003-05-17"
          squadNumber={9}
          leagueId="L-12345"
          labels={["Two-footed", "Leadership", "High Work-Rate"]}
          enabled={enabled}
          placement="right"
        />
      </Paper>
    </Box>
  );
};

export const Basic: Story = {
  render: () => <BasicStoryComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Hover to reveal a Paper/Card styled profile modal. Toggle on/off via the switch.',
      },
    },
  },
};

const MultipleInListStoryComponent: React.FC = () => {
  const [enabled, setEnabled] = useState(true);
  const athletes = mockAthletes.slice(0, 6);
  return (
    <Box sx={{ p: 3 }}>
      <FormControlLabel
        control={<Switch checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />}
        label="Enable profile card"
      />
      <Stack spacing={1.5} sx={{ mt: 2 }}>
        {athletes.map(a => (
          <PlayerProfileHoverCard
            key={a.id}
            athlete={a}
            dateOfBirth="2004-01-10"
            squads={[a.ageGroup]}
            leagueId={`L-${a.id}`}
            labels={["Fit", "Academy"]}
            enabled={enabled}
          />
        ))}
      </Stack>
    </Box>
  );
};

export const MultipleInList: Story = {
  render: () => <MultipleInListStoryComponent />,
};


