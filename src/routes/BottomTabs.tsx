import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Reports from '../screens/Reports';
import Add from '../screens/Add';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
    //route bevat de naam van de huidige tab
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({
          focused,
          color,
          size,
        }) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (
            route.name === 'Reports'
          ) {
            iconName = focused
              ? 'list'
              : 'list-outline';
          } else if (
            route.name === 'Add'
          ) {
            iconName = focused
              ? 'add-circle'
              : 'add-circle-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },

        tabBarActiveTintColor:
          'tomato',

        tabBarInactiveTintColor:
          'gray',
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />

      <Tab.Screen
        name="Reports"
        component={Reports}
      />

      <Tab.Screen
        name="Add"
        component={Add}
      />
    </Tab.Navigator>
  );
}