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
  habits: [
    {
      id: '1',
      title: 'Drink Water',
      progress: 50,
    },
  ],
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

    completeHabit: (
      state,
      action: PayloadAction<string>
    ) => {
      const habit = state.habits.find(
        (habit) =>
          habit.id === action.payload
      );

      if (habit) {
        habit.progress = 100;
      }
    },
  },
});

export const {
  addHabit,
  completeHabit,
} = habitsSlice.actions;

export default habitsSlice.reducer;