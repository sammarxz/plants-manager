import { Text, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Button } from "@/components";
import { RootStackParamList } from "@/routes/root.routes";

import { styles } from "./styles";

type UserConfirmationProps = StackNavigationProp<
  RootStackParamList,
  "UserConfirmation"
>;

export function UserConfirmation() {
  const navigation = useNavigation<UserConfirmationProps>();

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
          <Button
            title="Começar"
            onPress={() => navigation.navigate("PlantSelection")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
