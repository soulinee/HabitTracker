import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux';

import { store , persistor} from './src/redux/store';

import BottomTabs from './src/routes/BottomTabs';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
 import { PersistGate } from 'redux-persist/integration/react';
import { AuthUserProvider } from './src/contexts/AuthUserProvider';
import RootNavigation from './src/routes/RootNavigation';
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
        <AuthUserProvider>

          <Provider store={store}>
                <PersistGate
                  loading={null}
                  persistor={persistor}
                >
                    <NavigationContainer>
                       <RootNavigation />

                      <StatusBar style="auto" />
                    </NavigationContainer>
                 </PersistGate>
          </Provider>
        </AuthUserProvider>
  );
}