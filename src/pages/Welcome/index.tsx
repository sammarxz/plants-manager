import { Image, SafeAreaView, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import wateringImage from "@/assets/watering.png";
import { Button } from "@/components";
import { RootStackParamList } from "@/routes/root.routes";

import { styles } from "./styles";

type WelcomeProps = StackNavigationProp<RootStackParamList, "Welcome">;

export function Welcome() {
  const navigation = useNavigation<WelcomeProps>();

  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Gerencie {"\n"}
          suas plantas {"\n"}
          de forma fácil
        </Text>
        <Image source={wateringImage} />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("UserIdentification")}
        >
          <Feather style={styles.buttonIcon} name="chevron-right" />
        </Button>
      </SafeAreaView>
    </View>
  );
}
