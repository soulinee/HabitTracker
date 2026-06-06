import { StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { updateHabit } from '../redux/habitsSlice';
import { Frequency, Habit } from '../types/Habit';
import { globalStyles } from '../styles/global';

type Props = {
  visible: boolean;
  habit: Habit | null;
  onClose: () => void;
};
const EditHabitModal = ({
  visible,
  habit,
  onClose,
}: Props) => {

    const [title, setTitle] = useState('');

    const [goal, setGoal] = useState('');

  const [frequency,setFrequency] =useState<Frequency>('Daily');
    const dispatch = useDispatch();
 const handleSave = () => {

  if (!habit) return;
  const goalChanged =
  goal !== habit.goal;

const frequencyChanged =
  frequency !==
  habit.frequency;

  dispatch(
    updateHabit({
      id: habit.id,
      title,
      goal,
      frequency,
       completed:
      goalChanged ||
      frequencyChanged
        ? false
        : habit.completed,


    })
  );

  onClose();
};

  useEffect(() => {

  if (!habit) return;

  setTitle(
    habit.title
  );

  setGoal(
    habit.goal
  );

  setFrequency(
    habit.frequency
  );

}, [habit]);

 return (
  <Modal
    visible={visible}
    animationType="slide"
    transparent
  >
    <View
      style={
        globalStyles.modalOverlay
      }
    >
      <View
        style={
          globalStyles.modalContainer
        }
      >
        <Text
          style={
            globalStyles.modalTitle
          }
        >
          Edit Habit
        </Text>

        <TextInput
          style={
            globalStyles.input
          }
          value={title}
          onChangeText={setTitle}
          placeholder="Habit title"
        />

        <TextInput
          style={
            globalStyles.input
          }
          value={goal}
          onChangeText={setGoal}
          placeholder="Goal"
        />

        <Text
          style={
            globalStyles.label
          }
        >
          Frequency
        </Text>

        <View
          style={
            globalStyles.frequencyRow
          }
        >
          <Pressable
            style={[
              globalStyles.frequencyButton,
              frequency ===
                'Daily' &&
                globalStyles.selectedFrequency,
            ]}
            onPress={() =>
              setFrequency(
                'Daily'
              )
            }
          >
            <Text
              style={
                globalStyles.frequencyText
              }
            >
              Daily
            </Text>
          </Pressable>

          <Pressable
            style={[
              globalStyles.frequencyButton,
              frequency ===
                'Weekly' &&
                globalStyles.selectedFrequency,
            ]}
            onPress={() =>
              setFrequency(
                'Weekly'
              )
            }
          >
            <Text
              style={
                globalStyles.frequencyText
              }
            >
              Weekly
            </Text>
          </Pressable>

          <Pressable
            style={[
              globalStyles.frequencyButton,
              frequency ===
                'Monthly' &&
                globalStyles.selectedFrequency,
            ]}
            onPress={() =>
              setFrequency(
                'Monthly'
              )
            }
          >
            <Text
              style={
                globalStyles.frequencyText
              }
            >
              Monthly
            </Text>
          </Pressable>
        </View>

        <View
          style={
            globalStyles.modalButtons
          }
        >
          <Pressable
            style={
              globalStyles.modalButton
            }
            onPress={
              handleSave
            }
          >
            <Text
              style={
                globalStyles.buttonText
              }
            >
              Save
            </Text>
          </Pressable>

          <Pressable
            style={
              globalStyles.modalCancelButton
            }
            onPress={onClose}
          >
            <Text
              style={
                globalStyles.buttonText
              }
            >
              Cancel
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  </Modal>
);
}

export default EditHabitModal

const styles = StyleSheet.create({})