import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

type Props = {
  title: string;
  progress: number;
};

const HabitCard = ({ title, progress }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressFill,
            { width: `${progress}%` },
          ]}
        />
      </View>

      <Text style={styles.progressText}>
        {progress}%
      </Text>
      <TouchableOpacity>
        <Text>Complete</Text>
        </TouchableOpacity>


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
    fontWeight: '600',
  },
});