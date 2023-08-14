import { View, Text } from "react-native";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Olá,</Text>
      <Text style={styles.username}>Samuel</Text>
    </View>
  );
}
