// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { globalStyles } from '../styles/global'
// import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
// import { StackNavigationProp } from '@react-navigation/stack'
// import { HomeStackParamList } from '../routes/HomeStack'


// type ReviewDetailsNavigationProp = StackNavigationProp<HomeStackParamList,"ReviewDetails">;
// type ReviewDetailsRouteProp = RouteProp<HomeStackParamList, "ReviewDetails">;
// type ReviewDetailsProperties = {
//   navigation: ReviewDetailsNavigationProp;
//   route: ReviewDetailsRouteProp;
// }
// const ReviewDetails = () => {

//   const navigation = useNavigation<ReviewDetailsNavigationProp>();

//   //de route informatie opvragen
//   //met de hook
//   const  {params} = useRoute<ReviewDetailsRouteProp>();

//   const pressHandler = () =>{
//     navigation.goBack();
//   }
//   return (
//     <View style={globalStyles.container}>
//          <Text>{params.title}</Text>
//          <Text>{params.body}</Text>
//          <Text>{params.rating}</Text>
          
//        </View>
//   )
// }

// export default ReviewDetails

// const styles = StyleSheet.create({})