import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Habit = {
  id: string;
  title: string;
  progress: number;
};

type HabitState = {
  habits: Habit[];
};

const initialState: HabitState = {
  habits: [],
};

const habitsSlice = createSlice({
  name: 'habits',

  initialState,

  reducers: {
    addHabit: (
      state,
      action: PayloadAction<Habit>
    ) => {
      state.habits.push(action.payload);
    },
  },
});

export const { addHabit } =
  habitsSlice.actions;

export default habitsSlice.reducer;