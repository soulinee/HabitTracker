import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

import { useDispatch } from 'react-redux';

import { completeHabit } from '../redux/habitsSlice';

type Props = {
  id: string;
  title: string;
  progress: number;
};

const HabitCard = ({
  id,
  title,
  progress,
}: Props) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {title}
      </Text>

      <View
        style={styles.progressBackground}
      >
        <View
          style={[
            styles.progressFill,
            {
              width: `${progress}%`,
            },
          ]}
        />
      </View>

      <Text style={styles.progressText}>
        {progress}%
      </Text>

      {progress === 100 ? (
        <View style={styles.goalContainer}>
          <Text style={styles.goalText}>
            Goal Met
          </Text>
        </View>
      ) : (
        <Button
          title="Complete"
          onPress={() =>
            dispatch(
              completeHabit(id)
            )
          }
        />
      )}
    </View>
  );
};

export default HabitCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f7f7f7',
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
});