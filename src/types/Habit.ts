export type Frequency =
  | 'Daily'
  | 'Weekly'
  | 'Monthly';

export type Habit = {
  firestoreId?: string;

  id: string;

  title: string;

  progress: number;

  icon: string;

  frequency: Frequency;

  goal: string;
  streak: number;

  completed: boolean;
  lastCompletedDate: string | null;
};

export type RootTabParamList = {
  Home: undefined;
  Reports: undefined;
  Add: undefined;
};