export interface AthleteMetric {
  label: string;
  value: number | string;
  unit?: string;
}

export interface Athlete {
  id: string;
  name: string;
  age: number;
  country: string;
  sport: string;
  rank?: number;
  metrics?: AthleteMetric[];
  tags?: string[];
  notes?: string;
}