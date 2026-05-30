import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

import { useSelector } from 'react-redux';

import Header from '../components/Header';

import { RootState } from '../redux/store';

import { colors } from '../constants/colors';

const Reports = () => {
  const habits = useSelector(
    (state: RootState) =>
      state.habits.habits
  );

  const totalHabits =
    habits.length;

  const completedHabits =
    habits.filter(
      (habit) => habit.completed
    ).length;

  const completionRate =
    totalHabits === 0
      ? 0
      : Math.round(
          (completedHabits /
            totalHabits) *
            100
        );
   const completedHabitList =
        habits.filter(
          (habit) => habit.completed
        );

   const incompleteHabitList =
        habits.filter(
          (habit) => !habit.completed
        );

  return (
  <ScrollView
  style={styles.container}
  showsVerticalScrollIndicator={false}
>
  <Header title="Reports" />

  <View style={styles.card}>
    <Text style={styles.label}>
      Total Habits
    </Text>

    <Text style={styles.value}>
      {totalHabits}
    </Text>
  </View>

  <View style={styles.card}>
    <Text style={styles.label}>
      Completed Habits
    </Text>

    <Text style={styles.value}>
      {completedHabits}
    </Text>
  </View>

  <View style={styles.card}>
    <Text style={styles.label}>
      Completion Rate
    </Text>

    <Text style={styles.value}>
      {completionRate}%
    </Text>
  </View>

  {/* HIER PLAKKEN */}
  <View style={styles.card}>
  <Text style={styles.label}>
    All Habits
  </Text>

  {habits.map((habit) => (
    <Text
      key={habit.id}
      style={styles.habitText}
    >
      • {habit.title}
    </Text>
  ))}
</View>

<View style={styles.card}>
  <Text style={styles.label}>
    Completed Habits
  </Text>

  {completedHabitList.length ===
  0 ? (
    <Text style={styles.emptyText}>
      No completed habits yet
    </Text>
  ) : (
    completedHabitList.map(
      (habit) => (
        <Text
          key={habit.id}
          style={styles.habitText}
        >
          ✓ {habit.title}
        </Text>
      )
    )
  )}
</View>

 
</ScrollView>
  );
};

export default Reports;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      colors.background,
    padding: 20,
  },

  card: {
    backgroundColor:
      colors.card,
    borderRadius: 25,
    padding: 25,
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    color: colors.muted,
    marginBottom: 10,
    fontWeight: '600',
  },

  value: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.primary,
  },
  habitText: {
  fontSize: 16,
  color: colors.textDark,
  marginBottom: 10,
  fontWeight: '500',
},

emptyText: {
  fontSize: 15,
  color: colors.muted,
},
});