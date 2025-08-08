export interface Athlete {
  id: string;
  name: string;
  position: string;
  ageGroup: string;
  avatar?: string;
  status: 'available' | 'unavailable' | 'injured';
  isSelected?: boolean;
}

export interface AgeGroup {
  id: string;
  name: string;
  athletes: Athlete[];
  isExpanded?: boolean;
}

export interface Position {
  id: string;
  name: string;
  athletes: Athlete[];
}

export interface FilterOptions {
  searchTerm: string;
  selectedAgeGroups: string[];
  selectedPositions: string[];
  selectedSquad: string;
  sortBy: 'name' | 'position' | 'ageGroup';
  sortOrder: 'asc' | 'desc';
}

export interface AthleteSelectorProps {
  athletes: Athlete[];
  selectedAthletes?: string[];
  onSelectionChange: (selectedIds: string[]) => void;
  onClose?: () => void;
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  maxHeight?: number | string;
  variant?: 'drawer' | 'dropdown';
  loading?: boolean;
  error?: string;
}

export interface AthleteSelectorContentProps extends Omit<AthleteSelectorProps, 'variant'> {
  compact?: boolean;
}
