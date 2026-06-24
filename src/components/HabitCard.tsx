import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

import { useDispatch } from 'react-redux';

import { completeHabit } from '../redux/habitsSlice';
import { colors } from '../constants/colors';
import { Frequency } from '../types/Habit';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { auth } from '../Firebase';
import { completeHabitInFirestore } from '../services/habitService';
type Props = {
   firestoreId?: string;
  id: string;
  title: string;
  progress: number;
  icon: string;
  frequency: Frequency;
  goal: string;
  completed: boolean;
  streak: number;

};

 
const HabitCard = ({
  firestoreId,
  id,
  title,
  progress,
  icon,
  frequency,
  goal,
  completed,
  streak
}: Props) => {
  const dispatch = useDispatch();
  console.log(
  title,
  firestoreId,
  completed
);

  const handleComplete = async () => {
  dispatch(
    completeHabit(id)
  );
  const updatedStreak =
  streak + 1;
  if (
    auth.currentUser &&
    firestoreId
  )
  
   {
    console.log(
  'FirestoreId:',
  firestoreId
  );
  console.log(
    'UserId:',
    auth.currentUser?.uid
  );
    await completeHabitInFirestore(
      auth.currentUser.uid,
      firestoreId,
      updatedStreak
    );
  }
};

  return (
    <View style={styles.card}>
     <View style={styles.topRow}>
  <View style={styles.iconContainer}>
    <Ionicons
      name={icon as any}
      size={24}
      color={colors.primary}
    />
  </View>

  <View style={styles.textContainer}>
    <Text style={styles.title}>
      {title}
    </Text>

    <Text style={styles.subtitle}>
      {frequency} • {goal}
    </Text>
  </View>
</View>

       

      {completed ? (
        <View style={styles.goalContainer}>
          <Text style={styles.goalText}>
            Goal Met
          </Text>
        </View>
      ) : (
        <Button
          title="Complete"
          onPress={handleComplete}
        />
      )}
    </View>
  );
};

export default HabitCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
  },

  progressBackground: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 20,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#ff5c8a',
    borderRadius: 20,
  },

  progressText: {
    marginTop: 10,
    marginBottom: 15,
    fontWeight: '600',
  },

  goalContainer: {
    backgroundColor: '#b8f5b1',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },

  goalText: {
    color: '#1d7a1d',
    fontWeight: '700',
    fontSize: 16,
  },
  topRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
},

iconContainer: {
  width: 55,
  height: 55,
  borderRadius: 50,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 15,
},

textContainer: {
  flex: 1,
},

subtitle: {
  color: colors.muted,
  fontSize: 14,
  marginTop: 4,
  fontWeight: '500',
},
});