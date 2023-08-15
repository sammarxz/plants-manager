import { View, ActivityIndicator } from "react-native";

import { styles } from "./styles";
import { theme } from "@/styles";

export function Load() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.green} />
    </View>
  );
}
