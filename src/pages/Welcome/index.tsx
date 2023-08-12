import { Feather } from '@expo/vector-icons';
import { Image, SafeAreaView, Text, View } from "react-native";

import { styles } from "./styles";

import wateringImage from '@/assets/watering.png';

import { Button } from "@/components";

export function Welcome() {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Gerencie {'\n'} 
          suas plantas {'\n'}
          de forma fácil
        </Text>
        <Image source={wateringImage} />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>
        <Button style={styles.button}>
          <Feather style={styles.buttonIcon} name="chevron-right" />
        </Button>
      </SafeAreaView>
    </View>
  )
}