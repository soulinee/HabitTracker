import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import React, { useState } from 'react';

import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigation }
from '@react-navigation/native';

const Register = () => {
     const navigation =
      useNavigation<any>();
  const auth = getAuth();

  const [email, setEmail] =
    useState('');

  const [name, setName] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [
    repeatPassword,
    setRepeatPassword,
  ] = useState('');

  const handleRegister = () => {
    if (
      !email ||
      !name ||
      !password ||
      !repeatPassword
    ) {
      Alert.alert(
        'Error',
        'Fill in all fields'
      );

      return;
    }

    if (
      password !== repeatPassword
    ) {
      Alert.alert(
        'Error',
        'Passwords do not match'
      );

      return;
    }

    createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then(() => {
        Alert.alert(
          'Success',
          'Account created'
        );
      })
      .catch((error) => {
        Alert.alert(
          'Register Error',
          error.message
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Register
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Repeat Password"
        secureTextEntry
        value={repeatPassword}
        onChangeText={
          setRepeatPassword
        }
      />

      <Button
        title="Register"
        onPress={handleRegister}
      />
        <Button
            title="Ga terug naar login"
            onPress={() =>
              navigation.navigate('Login')
            }
          />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
});