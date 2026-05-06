import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home, { SuperHero } from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

export type HomeStackParamList = {
  Home:undefined; // er zijn geen properties nodig no required props
  ReviewDetails: SuperHero; // geimporteerd van Home.tsx

}
const Stack= createStackNavigator<HomeStackParamList>();
 
const HomeStack = () => {
  return (
     <Stack.Navigator>
          
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ReviewDetails' component={ReviewDetails}/>
        

     </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})