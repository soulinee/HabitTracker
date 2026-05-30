import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import {
  Habit,
} from '../types/Habit';

type HabitState = {
  habits: Habit[];
};

const initialState: HabitState = {
  habits: [
    {
      id: '1',

      title: 'Drink Water',

      progress: 50,

      icon: 'water',

      frequency: 'Daily',

      goal: '3000 ml',

      completed: false,
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
      state.habits.push(
        action.payload
      );
    },

    completeHabit: (
      state,
      action: PayloadAction<string>
    ) => {
      const habit =
        state.habits.find(
          (habit) =>
            habit.id ===
            action.payload
        );

      if (habit) {
        habit.progress = 100;

        habit.completed = true;
      }
    },
  },
});

export const {
  addHabit,
  completeHabit,
} = habitsSlice.actions;

export default habitsSlice.reducer;