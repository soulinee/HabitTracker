import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { useAuth }
from '../contexts/AuthUserProvider';

import BottomTabs from './BottomTabs';

import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack =
  createNativeStackNavigator();

export default function RootNavigation() {
  //controleren of er een ingelogde gebruiker is
  const { user, isLoading } =
    useAuth();

  if (isLoading) return null;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* als de user ingelogd is wordt de bottomTabs geladen */}
      {user ? (
        <Stack.Screen
          name="App"
          component={BottomTabs}
        />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
          />

          <Stack.Screen
            name="Register"
            component={Register}
          />
        </>
      )}
    </Stack.Navigator>
  );
}