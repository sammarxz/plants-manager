import { useCallback } from "react";
import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from "@expo-google-fonts/jost";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { UserConfirmation } from "@/pages";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <UserConfirmation />
      <StatusBar style="dark" />
    </View>
  );
}
