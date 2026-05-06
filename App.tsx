import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/routes/HomeStack';
import 'react-native-gesture-handler';
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsloaded] = useFonts({
    "archivo-italic": require("./assets/fonts/Archivo-Italic-VariableFont_wdth,wght.ttf"),
    "archivo": require("./assets/fonts/Archivo-VariableFont_wdth,wght.ttf"),

  });

   useEffect(() => {

    if (fontsloaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsloaded]);

  if (!fontsloaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <HomeStack/>
          <StatusBar style="auto" />
        </SafeAreaView>

      </SafeAreaProvider>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
