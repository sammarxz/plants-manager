import { Text, View, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import type { RouteProp } from "@react-navigation/native";

import { Button } from "@/components";
import { RootStackParamList } from "@/routes/root.routes";

import { styles } from "./styles";

type UserConfirmationProps = StackNavigationProp<
  RootStackParamList,
  "Confirmation"
>;

export interface ConfirmationParams {
  title: string;
  subtitle: string;
  buttonTitle: string;
  emoji: string;
  nextScreen: keyof RootStackParamList;
}

export function Confirmation() {
  const navigation = useNavigation<UserConfirmationProps>();
  const routes = useRoute<RouteProp<RootStackParamList, "Confirmation">>();

  const { title, subtitle, buttonTitle, emoji, nextScreen } =
    routes.params as ConfirmationParams;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.emoji}>{emoji}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.footer}>
          <Button
            title={buttonTitle}
            onPress={() => navigation.navigate(nextScreen as any)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
