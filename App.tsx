import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux';

import { store } from './src/redux/store';

import BottomTabs from './src/routes/BottomTabs';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs />

        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}