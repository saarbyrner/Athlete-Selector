# Athlete Selector Component

A reusable, responsive athlete selection component built with Material-UI that can be used in both Drawer and Dropdown contexts.

## Features

- **🎨 Consistent Design**: Follows Material-UI design principles with consistent styling
- **📱 Responsive**: Automatically adapts to mobile and desktop layouts
- **🔄 Flexible Container**: Works in Drawer, Popover, or standalone contexts
- **🏗️ Hierarchical Organization**: Groups athletes by age group and position
- **✅ Batch Selection**: Select/clear all athletes in a group
- **🔍 Search & Filter**: Real-time search with filtering capabilities
- **🏷️ Status Indicators**: Visual status chips for availability
- **📚 Storybook Ready**: Comprehensive stories for all variants

## Installation

```bash
npm install @your-org/athlete-selector
```

## Peer Dependencies

```bash
npm install react react-dom @mui/material @mui/icons-material @emotion/react @emotion/styled
```

## Usage

### Drawer Implementation

```tsx
import { DrawerAthleteSelector } from '@your-org/athlete-selector';

function MyComponent() {
  const [open, setOpen] = useState(false);
  const [selectedAthletes, setSelectedAthletes] = useState<string[]>([]);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Select Athletes
      </Button>
      
      <DrawerAthleteSelector
        open={open}
        onClose={() => setOpen(false)}
        athletes={athletes}
        selectedAthletes={selectedAthletes}
        onSelectionChange={setSelectedAthletes}
        title="Select Team Members"
        anchor="right"
        width={460}
      />
    </>
  );
}
```

### Dropdown Implementation

```tsx
import { DropdownAthleteSelector } from '@your-org/athlete-selector';

function MyComponent() {
  const [selectedAthletes, setSelectedAthletes] = useState<string[]>([]);

  return (
    <DropdownAthleteSelector
      athletes={athletes}
      selectedAthletes={selectedAthletes}
      onSelectionChange={setSelectedAthletes}
      buttonText="Select Athletes"
      buttonVariant="outlined"
      showBadge={true}
      maxWidth={400}
    />
  );
}
```

### Standalone Implementation

```tsx
import { AthleteSelectorContent } from '@your-org/athlete-selector';

function MyComponent() {
  const [selectedAthletes, setSelectedAthletes] = useState<string[]>([]);

  return (
    <Paper>
      <AthleteSelectorContent
        athletes={athletes}
        selectedAthletes={selectedAthletes}
        onSelectionChange={setSelectedAthletes}
        title="Team Roster"
        maxHeight={600}
        compact={false}
      />
    </Paper>
  );
}
```

## Data Structure

### Athlete Interface

```tsx
interface Athlete {
  id: string;
  name: string;
  position: string;
  ageGroup: string;
  avatar?: string;
  status: 'available' | 'unavailable' | 'injured';
  isSelected?: boolean;
}
```

### Example Data

```tsx
const athletes: Athlete[] = [
  {
    id: 'adams-john',
    name: 'Adams, John',
    position: 'Striker',
    ageGroup: 'U23',
    status: 'available',
    avatar: 'https://example.com/avatar.jpg',
  },
  // ... more athletes
];
```

## Component Props

### DrawerAthleteSelector

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controls drawer visibility |
| `anchor` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | Drawer anchor position |
| `width` | `number \| string` | `460` | Drawer width |
| `athletes` | `Athlete[]` | - | Array of athlete data |
| `selectedAthletes` | `string[]` | `[]` | Array of selected athlete IDs |
| `onSelectionChange` | `(ids: string[]) => void` | - | Selection change handler |
| `onClose` | `() => void` | - | Close handler |
| `title` | `string` | `'Athletes'` | Header title |
| `showBackButton` | `boolean` | `false` | Show back navigation |
| `onBack` | `() => void` | - | Back button handler |

### DropdownAthleteSelector

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `buttonText` | `string` | `'Select Athletes'` | Button text |
| `buttonVariant` | `'contained' \| 'outlined' \| 'text'` | `'outlined'` | Button variant |
| `buttonColor` | `'primary' \| 'secondary' \| 'inherit'` | `'primary'` | Button color |
| `showBadge` | `boolean` | `true` | Show selection count badge |
| `maxWidth` | `number \| string` | `400` | Popover max width |
| `maxHeight` | `number \| string` | `500` | Popover max height |

### AthleteSelectorContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `compact` | `boolean` | `false` | Enable compact layout |
| `maxHeight` | `number \| string` | `600` | Container max height |
| `loading` | `boolean` | `false` | Show loading state |
| `error` | `string` | - | Error message |

## Responsive Behavior

- **Desktop**: Full-featured layout with standard spacing
- **Tablet**: Slightly reduced spacing, drawer becomes full-screen
- **Mobile**: Compact layout, drawer slides from bottom, dropdown becomes full-width

## Theming

The component uses Material-UI's theming system. Customize colors, typography, and spacing through your theme:

```tsx
const theme = createTheme({
  palette: {
    primary: {
      main: '#3b4960',
    },
    success: {
      main: '#0a875a',
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
});
```

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build component
npm run build

# Lint code
npm run lint
```

## Storybook

The component includes comprehensive Storybook stories demonstrating all variants and use cases:

- Drawer implementations (default, with back button, different anchors)
- Dropdown implementations (variants, compact mode)
- Standalone content
- Loading and error states
- Responsive behavior demo

## License

MIT
