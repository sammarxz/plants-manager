import { Image, SafeAreaView, Text } from "react-native";

import { styles } from "./styles";

import wateringImage from '../../assets/watering.png';

import { Button } from "../../components";

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gerencie suas plantas de forma fácil</Text>
      <Image source={wateringImage} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <Button style={styles.button} title="lick" />
    </SafeAreaView>
  )
}