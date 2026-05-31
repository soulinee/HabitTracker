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
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigation }
from '@react-navigation/native';

const Login = () => {
  const navigation =
  useNavigation<any>();
  const auth = getAuth();

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert(
        'Error',
        'Fill in all fields'
      );

      return;
    }

    signInWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then(() => {
        Alert.alert(
          'Success',
          'Logged in successfully'
        );
      })
      .catch((error) => {
        Alert.alert(
          'Login Error',
          error.message
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Login
      </Text>

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

      <Button
        title="Login"
        onPress={handleLogin}
      />
      <Button
      title="Ga naar Register"
      onPress={() =>
        navigation.navigate('Register')
      }
    />
    </View>
  );
};

export default Login;

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