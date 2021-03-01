import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { useFonts } from 'expo-font';


export default function App() {

  
  let [fontsLoaded] = useFonts({
    'Gilroy-Light': require('./assets/fonts/Gilroy-Light.otf'),
    'Gilroy-ExtraBold': require('./assets/fonts/Gilroy-ExtraBold.otf'),
  });

  const isLoadingComplete = useCachedResources() && fontsLoaded;
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="dark"/>
      </SafeAreaProvider>
    );
  }
}
