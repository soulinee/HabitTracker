import {
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Habit } from '../types/Habit';

import { addHabit } from '../redux/habitsSlice';

const Add = () => {
  const [habit, setHabit] =
    useState<string>('');

  const dispatch = useDispatch();

  const addHabitHandler = () => {
    if (!habit.trim()) return;

    const newHabit: Habit = {
      id: Math.random().toString(),
      title: habit,
      progress: 0,
    };

    dispatch(addHabit(newHabit));

    setHabit('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a habit..."
        style={styles.input}
        value={habit}
        onChangeText={setHabit}
      />

      <Button
        title="Add Habit"
        onPress={addHabitHandler}
      />
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
});