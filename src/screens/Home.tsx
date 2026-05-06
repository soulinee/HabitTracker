import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/global'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../routes/HomeStack';
 

export type SuperHero={
  title:string;
  rating:number;
  body:string;
  key:string;
};

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList,"Home">;
type HomeProperties ={
  navigation:HomeScreenNavigationProp;
}
//dit kunnen we ook op een andere manier doen 
//const Home = ({navigation}: HomeProperties)
 const Home = ( ) => {
  const [reviews, setReviews] = useState<SuperHero[]>([
    { title: "Zelda", rating: 5, body: "lorem ipsum", key: "1" },
    { title: "Giant", rating: 4, body: "lorem ipsum", key: "2" },
    { title: "Mini", rating: 3, body: "lorem ipsum", key: "3" },
  ]);
  // een hook om navigation mee geven 
  const navigation = useNavigation<HomeScreenNavigationProp>();
  // je krijgt informatie binnen die kan je eruit halen
  const pressHandler=(item:SuperHero)=>{
    navigation.navigate("ReviewDetails", item);
    //aangeraden manier
    //navigation.navigate("ReviewDetails");

    // navigation.push("ReviewDetails")
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
      data={reviews}
      renderItem={({item}) => (
        <TouchableOpacity
            onPress={()=>pressHandler(item)}>
          <Text style={globalStyles.titleText}>{item.title}</Text>

        </TouchableOpacity>
      )}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})