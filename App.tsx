import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux';

import { store } from './src/redux/store';

import BottomTabs from './src/routes/BottomTabs';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();
export default function App() {
  useEffect(() => {
  const prepare = async () => {
    await new Promise(resolve =>
      setTimeout(resolve, 2000)
    );

    await SplashScreen.hideAsync();
  };

  prepare();
}, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs />

        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}