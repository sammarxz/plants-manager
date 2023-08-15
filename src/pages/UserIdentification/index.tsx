import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Button } from "@/components";
import { theme } from "@/styles";
import { RootStackParamList } from "@/routes/root.routes";
import { storageKeys } from "@/config/keys";

import { styles } from "./styles";

type UserIdentificationProps = StackNavigationProp<
  RootStackParamList,
  "UserIdentification"
>;

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState("");
  const navigation = useNavigation<UserIdentificationProps>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFocused(!!value);
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit() {
    if (!name) {
      return Alert.alert("Me diz, como chamar você? 🤔");
    }

    try {
      await AsyncStorage.setItem(storageKeys.username, name);
      navigation.navigate("Confirmation", {
        title: "Prontinho",
        subtitle:
          "Agora vamos começar a cuidar das suas plantinhas com muito cuidado.",
        buttonTitle: "Começar",
        emoji: "😁",
        nextScreen: "PlantSelection",
      });
    } catch {
      Alert.alert("Não foi possível salver o seu nome de usuário. 😢");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>{isFilled ? "😄" : "😃"}</Text>
              <Text style={styles.title}>
                Como podemos {"\n"}
                chamar você?
              </Text>
            </View>
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && {
                  borderColor: theme.colors.green,
                },
              ]}
              placeholder="Digite um nome"
              value={name}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />
            <View style={styles.footer}>
              <Button
                title="Confirmar"
                disabled={!isFilled}
                onPress={handleSubmit}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
