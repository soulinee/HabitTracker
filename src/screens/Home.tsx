import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

import { useSelector } from 'react-redux';

import HabitCard from '../components/HabitCard';

import { RootState } from '../redux/store';

const Home = () => {
  const habits = useSelector(
    (state: RootState) =>
      state.habits.habits
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Today
      </Text>

      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HabitCard
            title={item.title}
            progress={item.progress}
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  header: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 20,
  },
});