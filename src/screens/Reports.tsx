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
import {
  useAuth,
} from '../contexts/AuthUserProvider';
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
        const hour =
  new Date().getHours();

const greeting =
  hour < 12
    ? 'Good Morning'
    : hour < 18
    ? 'Good Afternoon'
    : 'Good Evening';
 const { user } =
  useAuth();

const userName =
  user?.displayName ||
  'User';
  const bestHabit =
  habits.length > 0
    ? habits.reduce(
        (best, current) =>
          current.streak >
          best.streak
            ? current
            : best
      )
    : null;

 return (
  <ScrollView
    style={styles.container}
    showsVerticalScrollIndicator={
      false
    }
  >
    <Header title="Reports" />

    <Text
      style={styles.greeting}
    >
      {greeting}, {userName}
    </Text>

    <Text
      style={styles.subGreeting}
    >
      You completed {
        completedHabits
      } of {totalHabits} habits
      today
    </Text>

    <View
      style={styles.statsContainer}
    >
      <View
        style={styles.smallCard}
      >
        <Text
          style={styles.label}
        >
          Total
        </Text>

        <Text
          style={styles.value}
        >
          {totalHabits}
        </Text>
      </View>

      <View
        style={styles.smallCard}
      >
        <Text
          style={styles.label}
        >
          Done
        </Text>

        <Text
          style={styles.value}
        >
          {completedHabits}
        </Text>
      </View>
    </View>

    <View style={styles.card}>
      <Text
        style={styles.label}
      >
        Completion Rate
      </Text>

      <Text
        style={styles.value}
      >
        {completionRate}%
      </Text>
    </View>

    <View style={styles.card}>
      <Text
        style={styles.label}
      >
        🔥 Best Habit
      </Text>

      {bestHabit ? (
        <Text
          style={
            styles.habitText
          }
        >
          {bestHabit.title} -{' '}
          {bestHabit.streak}
          {' '}day streak
        </Text>
      ) : (
        <Text
          style={
            styles.emptyText
          }
        >
          No streaks yet
        </Text>
      )}
    </View>

    <View style={styles.card}>
      <Text
        style={styles.label}
      >
        Habit Breakdown
      </Text>

      {habits.map(
        (habit) => (
          <View
            key={habit.id}
            style={
              styles.breakdownRow
            }
          >
            <Text
              style={
                styles.habitText
              }
            >
              {habit.title}
            </Text>

            <Text
              style={
                styles.habitText
              }
            >
              {habit.completed
                ? '100%'
                : '0%'}
            </Text>
          </View>
        )
      )}
    </View>

    <View style={styles.card}>
      <Text
        style={styles.label}
      >
        Completed Habits
      </Text>

      {completedHabitList.length ===
      0 ? (
        <Text
          style={
            styles.emptyText
          }
        >
          No completed habits
          yet
        </Text>
      ) : (
        completedHabitList.map(
          (habit) => (
            <Text
              key={habit.id}
              style={
                styles.habitText
              }
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
  },greeting: {
  fontSize: 24,
  fontWeight: '700',
  color: colors.textDark,
  marginBottom: 5,
},

subGreeting: {
  fontSize: 16,
  color: colors.muted,
  marginBottom: 20,
},
statsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
},

statsRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
},

smallCard: {
  flex: 1,
  backgroundColor: colors.card,
  borderRadius: 20,
  padding: 20,
  marginHorizontal: 5,
},

breakdownRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 12,
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