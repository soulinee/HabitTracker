import React from 'react';

import {
  Text,
  TextInput,
  View,
  Pressable,
   KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import { updateProfile }
from 'firebase/auth';

import { useNavigation } from '@react-navigation/native';

import { globalStyles } from '../styles/global';

const auth = getAuth();

const RegisterSchema =
  Yup.object({
    name: Yup.string()
      .matches(
        /^[A-Za-z\s]+$/,
        'Name cannot contain numbers'
      )
      .required(
        'Name is required'
      ),

    email: Yup.string()
      .email(
        'Invalid email'
      )
      .required(
        'Email is required'
      ),

    password: Yup.string()
      .min(
        6,
        'Minimum 6 characters'
      )
      .required(
        'Password is required'
      ),

    repeatPassword:
      Yup.string()
        .oneOf(
          [Yup.ref('password')],
          'Passwords do not match'
        )
        .required(
          'Repeat password is required'
        ),
  });

const Register = () => {
  const navigation =
    useNavigation<any>();

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
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
          }}
          validationSchema={
            RegisterSchema
          }
         onSubmit={async (
  values,
  { setFieldError }
) => {
  try {

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

    await updateProfile(
      userCredential.user,
      {
        displayName: values.name,
      }
    );

  } catch (error: any) {

    if (
      error.code ===
      'auth/email-already-in-use'
    ) {
      setFieldError(
        'email',
        'Email already exists'
      );
    } else {
      setFieldError(
        'email',
        'Registration failed'
      );
    }
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
            <View
              style={
                globalStyles.formContainer
              }
            >
              <Text
                style={
                  globalStyles.titleText
                }
              >
                Register
              </Text>

              <TextInput
                style={
                  globalStyles.input
                }
                placeholder="Name"
                value={values.name}
                onChangeText={handleChange(
                  'name'
                )}
                onBlur={handleBlur(
                  'name'
                )}
              />

              {touched.name &&
                errors.name && (
                  <Text
                    style={
                      globalStyles.errorText
                    }
                  >
                    {errors.name}
                  </Text>
                )}

              <TextInput
                style={
                  globalStyles.input
                }
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
                style={
                  globalStyles.input
                }
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

              <TextInput
                style={
                  globalStyles.input
                }
                placeholder="Repeat Password"
                secureTextEntry
                value={
                  values.repeatPassword
                }
                onChangeText={handleChange(
                  'repeatPassword'
                )}
                onBlur={handleBlur(
                  'repeatPassword'
                )}
              />

              {touched.repeatPassword &&
                errors.repeatPassword && (
                  <Text
                    style={
                      globalStyles.errorText
                    }
                  >
                    {
                      errors.repeatPassword
                    }
                  </Text>
                )}

              <Pressable
                style={
                  globalStyles.button
                }
                onPress={() =>
                  handleSubmit()
                }
              >
                <Text
                  style={
                    globalStyles.buttonText
                  }
                >
                  REGISTER
                </Text>
              </Pressable>

              <Pressable
                style={
                  globalStyles.secondaryButton
                }
                onPress={() =>
                  navigation.navigate(
                    'Login'
                  )
                }
              >
                <Text
                  style={
                    globalStyles.buttonText
                  }
                >
                  GO TO LOGIN
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

export default Register;