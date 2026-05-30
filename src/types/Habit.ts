export type Frequency =
  | 'Daily'
  | 'Weekly'
  | 'Monthly';

export type Habit = {
  id: string;

  title: string;

  progress: number;

  icon: string;

  frequency: Frequency;

  goal: string;

  completed: boolean;
};