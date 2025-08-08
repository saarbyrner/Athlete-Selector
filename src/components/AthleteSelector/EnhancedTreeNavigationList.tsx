import React, { useState, useMemo } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  IconButton,
  Paper,
  Breadcrumbs,
  Link,
  Chip,
  Button,
  useTheme,
} from '@mui/material';
import {
  ChevronRight as ChevronRightIcon,
  ArrowBack as ArrowBackIcon,
  Home as HomeIcon,
  Group as GroupIcon,
} from '@mui/icons-material';
import { CompactAthleteCard } from './CompactAthleteCard';
import { Athlete } from './types';

interface NavigationLevel {
  id: string;
  name: string;
  type: 'squad' | 'position' | 'status' | 'athletes';
  parent?: string;
  count?: number;
}

interface TreeNode {
  id: string;
  name: string;
  type: 'squad' | 'position' | 'status' | 'athletes';
  parent?: string;
  children?: TreeNode[];
  athletes?: Athlete[];
  count: number;
}

interface EnhancedTreeNavigationListProps {
  athletes: Athlete[];
  selectedAthletes: string[];
  onSelectionChange: (athleteId: string, selected: boolean) => void;
  searchTerm?: string;
}

export const EnhancedTreeNavigationList: React.FC<EnhancedTreeNavigationListProps> = ({
  athletes,
  selectedAthletes,
  onSelectionChange,
  searchTerm = '',
}) => {
  const theme = useTheme();
  const [navigationPath, setNavigationPath] = useState<NavigationLevel[]>([]);

  // Build comprehensive tree structure
  const treeStructure = useMemo(() => {
    const filteredAthletes = searchTerm 
      ? athletes.filter(athlete => 
          athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          athlete.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
          athlete.ageGroup.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : athletes;

    // Group by squad -> position -> status
    const squadMap: { [key: string]: { [position: string]: { [status: string]: Athlete[] } } } = {};

    filteredAthletes.forEach(athlete => {
      if (!squadMap[athlete.ageGroup]) {
        squadMap[athlete.ageGroup] = {};
      }
      if (!squadMap[athlete.ageGroup][athlete.position]) {
        squadMap[athlete.ageGroup][athlete.position] = {};
      }
      if (!squadMap[athlete.ageGroup][athlete.position][athlete.status]) {
        squadMap[athlete.ageGroup][athlete.position][athlete.status] = [];
      }
      squadMap[athlete.ageGroup][athlete.position][athlete.status].push(athlete);
    });

    // Convert to tree structure
    const squads: TreeNode[] = Object.entries(squadMap).map(([squadId, positions]) => {
      const positionNodes: TreeNode[] = Object.entries(positions).map(([positionId, statuses]) => {
        const statusNodes: TreeNode[] = Object.entries(statuses).map(([statusId, athleteList]) => ({
          id: `${squadId}-${positionId}-${statusId}`,
          name: statusId.charAt(0).toUpperCase() + statusId.slice(1),
          type: 'status' as const,
          parent: `${squadId}-${positionId}`,
          athletes: athleteList,
          count: athleteList.length,
        }));

        return {
          id: `${squadId}-${positionId}`,
          name: positionId,
          type: 'position' as const,
          parent: squadId,
          children: statusNodes,
          count: statusNodes.reduce((sum, node) => sum + node.count, 0),
        };
      });

      return {
        id: squadId,
        name: squadId,
        type: 'squad' as const,
        children: positionNodes,
        count: positionNodes.reduce((sum, node) => sum + node.count, 0),
      };
    }).sort((a, b) => {
      // Sort squads by age group (U23, U21, U19, etc.)
      const getAgeNumber = (name: string) => {
        const match = name.match(/U(\d+)/);
        return match ? parseInt(match[1]) : 0;
      };
      return getAgeNumber(b.name) - getAgeNumber(a.name);
    });

    return squads;
  }, [athletes, searchTerm]);

  const getCurrentLevel = (): TreeNode[] => {
    if (navigationPath.length === 0) {
      return treeStructure; // Root level - show squads
    }

    const currentPath = navigationPath[navigationPath.length - 1];
    
    // Navigate through the tree to find current level
    let currentNodes = treeStructure;
    for (const pathItem of navigationPath) {
      const node = currentNodes.find(n => n.id === pathItem.id);
      if (node?.children) {
        currentNodes = node.children;
      } else if (node?.athletes) {
        // We're at athlete level
        return [];
      }
    }
    
    return currentNodes;
  };

  const getCurrentAthletes = (): Athlete[] => {
    if (navigationPath.length === 0) return [];
    
    const currentPath = navigationPath[navigationPath.length - 1];
    
    // Navigate through the tree to find athletes
    let currentNode: TreeNode | undefined;
    let nodes = treeStructure;
    
    for (const pathItem of navigationPath) {
      currentNode = nodes.find(n => n.id === pathItem.id);
      if (currentNode?.children) {
        nodes = currentNode.children;
      } else if (currentNode?.athletes) {
        return currentNode.athletes;
      }
    }
    
    return [];
  };

  const handleNavigate = (node: TreeNode) => {
    const newLevel: NavigationLevel = {
      id: node.id,
      name: node.name,
      type: node.type,
      parent: node.parent,
      count: node.count,
    };
    
    setNavigationPath(prev => [...prev, newLevel]);
  };

  const handleBack = () => {
    setNavigationPath(prev => prev.slice(0, -1));
  };

  const handleBreadcrumbClick = (index: number) => {
    setNavigationPath(prev => prev.slice(0, index + 1));
  };

  const handleSelectAll = (athletes: Athlete[]) => {
    const allSelected = athletes.every(athlete =>
      selectedAthletes.includes(athlete.id)
    );

    athletes.forEach(athlete => {
      onSelectionChange(athlete.id, !allSelected);
    });
  };

  const getCurrentLevelAthletes = (): Athlete[] => {
    const currentLevel = getCurrentLevel();
    const athletes: Athlete[] = [];
    
    const collectAthletes = (nodes: TreeNode[]) => {
      nodes.forEach(node => {
        if (node.athletes) {
          athletes.push(...node.athletes);
        } else if (node.children) {
          collectAthletes(node.children);
        }
      });
    };
    
    collectAthletes(currentLevel);
    return athletes;
  };

  const currentLevel = getCurrentLevel();
  const currentAthletes = getCurrentAthletes();
  const isAtAthleteLevel = currentAthletes.length > 0;
  const currentLevelName = navigationPath.length > 0 ? navigationPath[navigationPath.length - 1].name : 'Squads';

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header with Navigation */}
      <Box
        sx={{
          px: 2,
          py: 1.5,
          borderBottom: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'background.paper',
          flexShrink: 0,
        }}
      >
        {/* Breadcrumbs */}
        {navigationPath.length > 0 && (
          <Breadcrumbs
            separator={<ChevronRightIcon fontSize="small" />}
            sx={{ mb: 1 }}
          >
            <Link
              component="button"
              variant="body2"
              onClick={() => setNavigationPath([])}
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <HomeIcon fontSize="small" sx={{ mr: 0.5 }} />
              Squads
            </Link>
            {navigationPath.map((level, index) => (
              <Link
                key={level.id}
                component="button"
                variant="body2"
                onClick={() => handleBreadcrumbClick(index)}
                sx={{
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {level.name}
                {level.count && (
                  <Chip
                    label={level.count}
                    size="small"
                    sx={{ ml: 1, height: 16, fontSize: '0.7rem' }}
                  />
                )}
              </Link>
            ))}
          </Breadcrumbs>
        )}

        {/* Current Level Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {navigationPath.length > 0 && (
              <IconButton
                onClick={handleBack}
                size="small"
                sx={{ mr: 1 }}
              >
                <ArrowBackIcon fontSize="small" />
              </IconButton>
            )}
            
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'text.primary',
              }}
            >
              {currentLevelName}
            </Typography>

            {(isAtAthleteLevel || currentLevel.length > 0) && (
              <Chip
                label={isAtAthleteLevel ? currentAthletes.length : getCurrentLevelAthletes().length}
                size="small"
                sx={{ ml: 1 }}
              />
            )}
          </Box>

          {/* Select All Button */}
          {(isAtAthleteLevel || currentLevel.length > 0) && (
            <Button
              size="small"
              onClick={() => handleSelectAll(isAtAthleteLevel ? currentAthletes : getCurrentLevelAthletes())}
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: '0.875rem',
                fontWeight: 400,
                color: 'primary.main',
                textTransform: 'none',
                minWidth: 'auto',
                p: 0,
                '&:hover': {
                  backgroundColor: 'transparent',
                  textDecoration: 'underline',
                },
              }}
            >
              Select all
            </Button>
          )}
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        {isAtAthleteLevel ? (
          // Show athletes
          <Box>
            {currentAthletes.map((athlete) => (
              <CompactAthleteCard
                key={athlete.id}
                athlete={athlete}
                isSelected={selectedAthletes.includes(athlete.id)}
                onToggle={onSelectionChange}
              />
            ))}
          </Box>
        ) : (
          // Show navigation level
          <Paper elevation={0} sx={{ width: '100%' }}>
            <List sx={{ py: 0 }}>
              {currentLevel.map((node) => {
                const hasChildren = node.children && node.children.length > 0;
                const hasAthletes = node.athletes && node.athletes.length > 0;
                const isClickable = hasChildren || hasAthletes;
                
                return (
                  <ListItem
                    key={node.id}
                    disablePadding
                    sx={{
                      backgroundColor: node.name === 'U23' && navigationPath.length === 0 ? 'action.selected' : 'transparent',
                    }}
                  >
                    <ListItemButton
                      onClick={() => isClickable && handleNavigate(node)}
                      disabled={!isClickable}
                      sx={{
                        px: 2,
                        py: 1,
                        '&:hover': {
                          backgroundColor: node.name === 'U23' && navigationPath.length === 0 ? 'action.selected' : 'action.hover',
                        },
                      }}
                    >
                      {/* Icon based on type */}
                      {node.type === 'position' && (
                        <GroupIcon 
                          fontSize="small" 
                          sx={{ mr: 2, color: 'text.secondary' }}
                        />
                      )}
                      
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography
                              sx={{
                                fontFamily: '"Open Sans", sans-serif',
                                fontSize: '1rem',
                                fontWeight: 400,
                                color: 'text.primary',
                              }}
                            >
                              {node.name}
                            </Typography>
                            <Chip
                              label={node.count}
                              size="small"
                              variant="outlined"
                              sx={{ 
                                height: 20,
                                fontSize: '0.75rem',
                                fontFamily: '"Open Sans", sans-serif',
                              }}
                            />
                          </Box>
                        }
                      />
                      
                      {isClickable && (
                        <ChevronRightIcon 
                          fontSize="small" 
                          sx={{ color: 'text.secondary' }} 
                        />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        )}

        {/* Empty State */}
        {!isAtAthleteLevel && currentLevel.length === 0 && (
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              {searchTerm ? 'No results found for your search.' : 'No items available.'}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
