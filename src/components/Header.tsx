import React from 'react';

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  getAuth,
  signOut,
} from 'firebase/auth';

import Ionicons
from '@expo/vector-icons/Ionicons';

import { colors }
from '../constants/colors';

 import { globalStyles } from '../styles/global';
import { useDispatch } from 'react-redux';
import { clearHabits } from '../redux/habitsSlice';

type Props = {
  title: string;
};

export default function Header({
  title,
}: Props) {

  const auth = getAuth();
const dispatch =
  useDispatch();
  const user =
    auth.currentUser;

  const firstLetter =
    user?.displayName
      ?.charAt(0)
      .toUpperCase() || '?';

  const handleLogout =
    async () => {
      dispatch(
    clearHabits());
      await signOut(auth);
    };
    console.log(
  'DisplayName:',
  user?.displayName
);

  return (
    <View style={globalStyles.wrapper}>

      <View style={globalStyles.headerContainer}>

        <View
          style={globalStyles.leftSection}
        >
          <Image
            source={require('../../assets/icon1.png')}
            style={globalStyles.logo}
          />

          <Text
            style={
              globalStyles.headerTitle
            }
          >
            {title}
          </Text>
        </View>

        <View
          style={globalStyles.rightSection}
        >
          <View
            style={globalStyles.avatar}
          >
            <Text
              style={
                globalStyles.avatarText
              }
            >
              {firstLetter}
            </Text>
          </View>

          <Pressable
            onPress={
              handleLogout
            }
          >
            <Ionicons
              name="log-out-outline"
              size={28}
              color={
                colors.primary
              }
            />
          </Pressable>
        </View>

      </View>

      <View style={globalStyles.line} />

    </View>
  );
}