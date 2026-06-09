import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
 

import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';

import { Frequency, Habit } from '../types/Habit';

import { addHabit } from '../redux/habitsSlice';

import { colors } from '../constants/colors';
import { auth }
from '../Firebase';

import { saveHabit }
from '../services/habitService';

const Add = () => {
  const [habit, setHabit] =
    useState('');
    const [selectedIcon, setSelectedIcon] = useState('fitness');

const [frequency, setFrequency] = useState<Frequency>('Daily');

const [goal, setGoal] = useState('');

  const dispatch = useDispatch();
  const [showSuccess,setShowSuccess] = useState(false);

 const addHabitHandler =
  async () => {

    if (!habit.trim())
      return;
    //optional chaining controleren of currentuser bestaat voordat ik uid opvraag 
    const uid =
      auth.currentUser?.uid;

    if (!uid) return;
  // nieuwe habit object aanmaken wnr ik op save klik
    const newHabit: Habit = {
      id: Math.random().toString(),

      title: habit,

      progress: 0,

      icon: selectedIcon,

      frequency,

      goal,

      completed: false,
    };
    // ik stuur de object naar firestore
    const firestoreId =
      await saveHabit(
        uid,
        newHabit
      );
      //functie van redux
    dispatch(
      //addHabit is action 
      addHabit({
        ...newHabit,
        firestoreId,
      })
    );

    setHabit('');

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
};
  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={
      Platform.OS === 'ios'
        ? 'padding'
        : 'height'
    }
  >
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={
          false
        }
        keyboardShouldPersistTaps="handled"
      >
      <Header title="Add Habit" />

      {/* Habit Name */}

      <View style={styles.section}>
        <Text style={styles.label}>
          Habit Name
        </Text>

        <TextInput
          placeholder="e.g. Morning Yoga"
          placeholderTextColor={
            colors.muted
          }
          style={styles.input}
          value={habit}
          onChangeText={setHabit}
        />
      </View>

      {/* Choose Icon */}

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>
            Choose Icon
          </Text>

          <Text style={styles.viewAll}>
            View All
          </Text>
        </View>

            <View style={styles.iconsContainer}>
     <Pressable
      style={[
        styles.icon,
        selectedIcon === 'fitness' &&
          styles.selectedIcon,
      ]}
      onPress={() =>
        setSelectedIcon('fitness')
      }
    >
      <Ionicons
        name="fitness"
        size={30}
        color={colors.primary}
      />
    </Pressable>

          <Pressable
            style={[
              styles.icon,
              selectedIcon === 'water' &&
                styles.selectedIcon,
            ]}
            onPress={() =>
              setSelectedIcon('water')
            }
          >
            <Ionicons
              name="water"
              size={30}
              color={colors.primary}
            />
          </Pressable>

         <Pressable
            style={[
              styles.icon,
              selectedIcon === 'book' &&
                styles.selectedIcon,
            ]}
            onPress={() =>
              setSelectedIcon('book')
            }
          >
            <Ionicons
              name="book"
              size={30}
              color={colors.primary}
            />
          </Pressable>

         <Pressable
            style={[
              styles.icon,
              selectedIcon === 'leaf' &&
                styles.selectedIcon,
            ]}
            onPress={() =>
              setSelectedIcon('leaf')
            }
          >
            <Ionicons
              name="leaf"
              size={30}
              color={colors.primary}
            />
          </Pressable>
    </View>
    </View>

      {/* Frequency */}

      <View style={styles.section}>
        <Text style={styles.label}>
          Frequency
        </Text>

        <View style={styles.frequencyRow}>
          <Pressable
            onPress={() =>
              setFrequency('Daily')
            }
            style={
              frequency === 'Daily'
                ? styles.activePill
                : styles.pill
            }
          >
            <Text
              style={
                frequency === 'Daily'
                  ? styles.activePillText
                  : styles.pillText
              }
            >
              Daily
            </Text>
          </Pressable>

          <Pressable
            onPress={() =>
              setFrequency('Weekly')
            }
            style={
              frequency === 'Weekly'
                ? styles.activePill
                : styles.pill
            }
          >
            <Text
              style={
                frequency === 'Weekly'
                  ? styles.activePillText
                  : styles.pillText
              }
            >
              Weekly
            </Text>
          </Pressable>
        </View>
       </View>

      {/* Goal */}

      <View style={styles.section}>
        <Text style={styles.label}>
          Goal Target
        </Text>

        <TextInput
        placeholder="20 min"
        placeholderTextColor={
          colors.muted
        }
        style={styles.input}
        value={goal}
        onChangeText={setGoal}
      />
      </View>

      {showSuccess && (
        <View
          style={styles.successBox}
        >
          <Text
            style={styles.successText}
          >
            ✓ Habit saved successfully
          </Text>
        </View>
      )}

      {/* Button */}

      <Pressable
        style={styles.button}
        onPress={addHabitHandler}
      >
        <Text style={styles.buttonText}>
          Save Habit Ritual
        </Text>
      </Pressable>
    </ScrollView>
     </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      colors.background,
    paddingHorizontal: 20,
  },

  section: {
    backgroundColor:
      colors.surface,
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
  },
  successBox: {
  backgroundColor: '#dff6dd',
  padding: 15,
  borderRadius: 20,
  marginBottom: 20,
  alignItems: 'center',
},

successText: {
  color: '#2e7d32',
  fontWeight: '700',
  fontSize: 16,
},

  label: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    fontSize: 16,
    color: colors.textDark,
  },

  row: {
    flexDirection: 'row',
    justifyContent:
      'space-between',
    alignItems: 'center',
  },

  viewAll: {
    color: colors.primary,
    fontWeight: '600',
  },

  iconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },

  icon: {
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  frequencyRow: {
    flexDirection: 'row',
    gap: 12,
  },

  activePill: {
    backgroundColor:
      colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
  },

  activePillText: {
    color: '#fff',
    fontWeight: '700',
  },

  pill: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
  },

  pillText: {
    color: colors.primary,
    fontWeight: '600',
  },

  button: {
    backgroundColor:
      colors.primary,
    paddingVertical: 22,
    borderRadius: 40,
    alignItems: 'center',
    marginBottom: 40,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  selectedIcon: {
  borderWidth: 3,
  borderColor: colors.primary,
  backgroundColor: '#E8D9FF',
},
});