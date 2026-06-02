import React from 'react';
import {
  Text,
  TextInput,
  View,
  Pressable,
   ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
} from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  signInWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';

import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles/global';

 

const auth = getAuth();

const LoginSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required'),
});

const Login = () => {
  const navigation = useNavigation<any>();

  return (
     <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="height"
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <ScrollView
            style={globalStyles.container}
              contentContainerStyle={
    globalStyles.contentContainer
  }
            keyboardShouldPersistTaps="handled"
          > 
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async (
        values,
        { setFieldError }
      ) => {
        try {
          await signInWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
        } catch {
          setFieldError(
            'password',
            'Wrong email or password'
          );
        }
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={globalStyles.formContainer}>
          <Text style={globalStyles.titleText}>
            Login
          </Text>

          <TextInput
            style={globalStyles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={values.email}
            onChangeText={handleChange(
              'email'
            )}
            onBlur={handleBlur(
              'email'
            )}
          />

          {touched.email &&
            errors.email && (
              <Text
                style={
                  globalStyles.errorText
                }
              >
                {errors.email}
              </Text>
            )}

          <TextInput
            style={globalStyles.input}
            placeholder="Password"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange(
              'password'
            )}
            onBlur={handleBlur(
              'password'
            )}
          />

          {touched.password &&
            errors.password && (
              <Text
                style={
                  globalStyles.errorText
                }
              >
                {errors.password}
              </Text>
            )}

          <Pressable
            style={globalStyles.button}
            onPress={() =>
              handleSubmit()
            }
          >
            <Text
              style={
                globalStyles.buttonText
              }
            >
              LOGIN
            </Text>
          </Pressable>

          <Pressable
            style={
              globalStyles.secondaryButton
            }
            onPress={() =>
              navigation.navigate(
                'Register'
              )
            }
          >
            <Text
              style={
                globalStyles.buttonText
              }
            >
              GO TO REGISTER
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
     </ScrollView>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
};

export default Login;