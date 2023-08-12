import { Jost_400Regular, useFonts } from '@expo-google-fonts/jost';
import { StatusBar } from 'expo-status-bar';

import { View } from 'react-native';
import { Welcome } from './src/pages';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Jost_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ fontFamily: 'Jost_400Regular' }}>
      <Welcome />
      <StatusBar style="dark" />
    </View>
  );
}

