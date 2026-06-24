import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React, { useState } from 'react';
import { useNavigation }
from '@react-navigation/native';
 

import { BottomTabNavigationProp }
from '@react-navigation/bottom-tabs';

 
import { useSelector } from 'react-redux';

import HabitCard from '../components/HabitCard';

import { RootState } from '../redux/store';
import Header from '../components/Header';
import { colors } from '../constants/colors';
import EditHabitModal from '../components/EditHabitModal';
import { Habit, RootTabParamList } from '../types/Habit';

type HomeNavigationProp =
  BottomTabNavigationProp<
    RootTabParamList,
    'Home'
  >;
const Home = () =>
   {
    //dit heb ik veranderd misschien daardoor dat het niet werkt 
    const navigation =
  useNavigation<HomeNavigationProp>();
  const habits = useSelector(
    (state: RootState) =>
      state.habits.habits
  );
  console.log(
  "REDUX HABITS:",
  habits
);

  const [selectedHabit, setSelectedHabit] =useState<Habit | null>( null );

const [modalVisible, setModalVisible] = useState(false);
 
if (habits.length === 0) {
  return (
    <View style={styles.container}>
      <Header title="Home" />

      <View style={styles.emptyState}>
        <Text
          style={styles.emptyTitle}
        >
          No habits yet
        </Text>

        <Text
          style={styles.emptyText}
        >
          Create your first habit
          to start tracking.
        </Text>

     <Pressable
     style={styles.emptyButton}
        onPress={() =>
          navigation.navigate('Add')
        }
      >
        <Text
          style={
            styles.emptyButtonText
          }
        >
          Create First Habit
        </Text>
        </Pressable>
      </View>
    </View>
  );
}
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
     
        <Pressable
          onPress={() => {
            setSelectedHabit(item);
            setModalVisible(true);
          }}
        >
          <HabitCard
            firestoreId={item.firestoreId}
            id={item.id}
            title={item.title}
            progress={item.progress}
            icon={item.icon}
            frequency={item.frequency}
            goal={item.goal}
            completed={item.completed}
             streak={item.streak}
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
emptyState: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},

emptyTitle: {
  fontSize: 28,
  fontWeight: '700',
  color: colors.textDark,
  marginBottom: 10,
},

emptyText: {
  fontSize: 16,
  color: colors.muted,
  textAlign: 'center',
  paddingHorizontal: 30,
},
emptyButton: {
  backgroundColor:
    colors.primary,
  paddingVertical: 16,
  paddingHorizontal: 30,
  borderRadius: 30,
  marginTop: 25,
},

emptyButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '700',
},
});