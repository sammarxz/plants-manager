import { Text, View, SafeAreaView } from "react-native";

import { styles } from "./styles";
import { Button } from "@/components";

export function UserConfirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.emoji}>🌱</Text>
          <Text style={styles.title}>Prontinho!</Text>
          <Text style={styles.subtitle}>
            Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
          </Text>
        </View>
        <View style={styles.footer}>
          <Button title="Começar" />
        </View>
      </View>
    </SafeAreaView>
  );
}
