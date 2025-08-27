import React from 'react';
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Paper,
  Popper,
  Typography,
  useTheme,
} from '@mui/material';
import { Athlete } from './types';
import { getStatusColor, getStatusLabel } from './utils';

export interface PlayerProfileHoverCardProps {
  athlete: Athlete;
  squads?: string[]; // Additional squads beyond athlete.ageGroup
  dateOfBirth?: string; // ISO string or human-readable
  squadNumber?: string | number;
  leagueId?: string;
  labels?: string[];
  /** Deprecated: use `labels` instead */
  tags?: string[];
  enabled?: boolean; // Turn hover card on/off
  placement?: 'top' | 'bottom' | 'left' | 'right';
  hoverOpenDelayMs?: number;
  hoverCloseDelayMs?: number;
  children?: React.ReactNode;
}

export const PlayerProfileHoverCard: React.FC<PlayerProfileHoverCardProps> = ({
  athlete,
  squads = [],
  dateOfBirth,
  squadNumber,
  leagueId,
  labels,
  tags,
  enabled = true,
  placement = 'right',
  hoverOpenDelayMs = 120,
  hoverCloseDelayMs = 140,
  children,
}) => {
  const theme = useTheme();
  const anchorRef = React.useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const openTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const handleEnter = () => {
    if (!enabled) return;
    clearTimers();
    openTimer.current = setTimeout(() => setOpen(true), hoverOpenDelayMs);
  };

  const handleLeave = () => {
    if (!enabled) return;
    clearTimers();
    closeTimer.current = setTimeout(() => setOpen(false), hoverCloseDelayMs);
  };

  React.useEffect(() => () => clearTimers(), []);

  const allSquads = React.useMemo(() => {
    const values = [athlete.ageGroup, ...squads].filter(Boolean);
    return Array.from(new Set(values));
  }, [athlete.ageGroup, squads]);

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
      {/* Trigger: avatar + name */}
      <Box
        ref={anchorRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          cursor: enabled ? 'pointer' : 'default',
        }}
      >
        {children ?? (
          <>
            <Avatar
              src={athlete.avatar}
              alt={athlete.name}
              sx={{
                width: 28,
                height: 28,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              {athlete.name
                .split(' ')
                .map(n => n[0])
                .join('')
                .toUpperCase()}
            </Avatar>
            <Typography
              variant="body2"
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '0.95rem',
                color: 'text.primary',
                lineHeight: 1.3,
              }}
            >
              {athlete.name}
            </Typography>
          </>
        )}
      </Box>

      {/* Hover Card */}
      <Popper
        open={enabled && open}
        anchorEl={anchorRef.current}
        placement={placement}
        modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        disablePortal={false}
        sx={{ zIndex: (theme) => theme.zIndex.tooltip }}
        keepMounted
      >
        <Paper
          elevation={4}
          sx={{
            width: 320,
            p: 2,
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'background.paper',
            boxShadow: theme.shadows[6],
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <Avatar
              src={athlete.avatar}
              alt={athlete.name}
              sx={{ width: 40, height: 40, border: '1px solid', borderColor: 'divider' }}
            >
              {athlete.name
                .split(' ')
                .map(n => n[0])
                .join('')
                .toUpperCase()}
            </Avatar>
            <Box sx={{ minWidth: 0 }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'text.primary',
                  lineHeight: 1.3,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {athlete.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: '0.875rem',
                  color: 'text.secondary',
                  lineHeight: 1.3,
                }}
              >
                {athlete.position}
              </Typography>
            </Box>
            <Chip
              label={getStatusLabel(athlete.status)}
              color={getStatusColor(athlete.status)}
              size="small"
              sx={{ ml: 'auto' }}
            />
          </Box>

          <Divider sx={{ mb: 1 }} />

          {/* Squads (always render section for consistent structure) */}
          <Box sx={{ mb: 1 }}>
            <Typography
              variant="caption"
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                color: 'text.secondary',
                display: 'block',
                mb: 0.5,
              }}
            >
              Squads
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {allSquads.map(s => (
                <Chip key={s} label={s} size="small" variant="outlined" />
              ))}
            </Box>
          </Box>

          {/* Details grid (always render rows) */}
          <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', rowGap: 0.5, columnGap: 1 }}>
            <Typography variant="caption" color="text.secondary">DOB</Typography>
            <Typography variant="body2">{dateOfBirth || '—'}</Typography>
            <Typography variant="caption" color="text.secondary">Squad Number</Typography>
            <Typography variant="body2">{(squadNumber ?? '—') as any}</Typography>
            <Typography variant="caption" color="text.secondary">League ID</Typography>
            <Typography variant="body2">{leagueId || '—'}</Typography>
          </Box>

          {/* Labels (always render section; empty when none) */}
          {(() => {
            const finalLabels = labels && labels.length ? labels : (tags || []);
            return (
              <Box sx={{ mt: 1 }}>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: '"Open Sans", sans-serif',
                    color: 'text.secondary',
                    display: 'block',
                    mb: 0.5,
                  }}
                >
                  Labels
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, minHeight: 24 }}>
                  {finalLabels.map(l => (
                    <Chip key={l} label={l} size="small" />
                  ))}
                </Box>
              </Box>
            );
          })()}
        </Paper>
      </Popper>
    </Box>
  );
};


