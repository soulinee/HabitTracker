import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import HabitCard from '../components/HabitCard';

import { RootState } from '../redux/store';
import Header from '../components/Header';
import { colors } from '../constants/colors';
import EditHabitModal from '../components/EditHabitModal';
import { Habit } from '../types/Habit';

const Home = () => {
  const habits = useSelector(
    (state: RootState) =>
      state.habits.habits
  );
  const [selectedHabit, setSelectedHabit] =useState<Habit | null>( null );

const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
       <Header title="Home" />
      <Text style={styles.header}>
        Today
      </Text>

      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        //  <HabitCard
        //   id={item.id}
        //   title={item.title}
        //   progress={item.progress}
        //   icon={item.icon}
        //   frequency={item.frequency}
        //   goal={item.goal}
        //   completed={item.completed}
        // />
        <Pressable
          onPress={() => {
            setSelectedHabit(item);
            setModalVisible(true);
          }}
        >
          <HabitCard
            id={item.id}
            title={item.title}
            progress={item.progress}
            icon={item.icon}
            frequency={item.frequency}
            goal={item.goal}
            completed={item.completed}
          />
        </Pressable>
        )}
      />

      <EditHabitModal
        visible={modalVisible}
        habit={selectedHabit}
        onClose={() =>
          setModalVisible(false)
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },

  header: {
  fontSize: 24,
  fontWeight: '700',
  color: colors.textDark,
  marginBottom: 20,
},
});