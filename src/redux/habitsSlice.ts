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
//beginwaarden van mijn state
const initialState: HabitState = {
  habits: [],
};

const habitsSlice = createSlice({
  name: 'habits',

  initialState,
//logic that changes state = reducers
  reducers: {
    //addHabit is een reducerfunctie
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
         const today =
        new Date()
          .toISOString()
          .split('T')[0];
        habit.progress = 100;
        habit.streak +=1;
        habit.completed = true;
        habit.lastCompletedDate = today;
      }
    },
    updateHabit: (
          state,
          action
        ) => {

          const index =
            state.habits.findIndex(
              h =>
                h.id ===
                action.payload.id
            );

          if (index !== -1) {

            state.habits[index] = {
              ...state.habits[index],
              ...action.payload,
            };
          }
      },

       setHabits: (
        state,
        action
        ) => {

        state.habits =
          action.payload;
        },
        clearHabits: (state) => {
        state.habits = [];
},
    },
});

export const {
  addHabit,
  completeHabit,
  updateHabit,
  setHabits,
  clearHabits
} = habitsSlice.actions;

export default habitsSlice.reducer;