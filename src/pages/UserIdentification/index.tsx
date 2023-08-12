import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";

import { Button } from "@/components";
import { theme } from "@/styles";

import { styles } from "./styles";

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState("");

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

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>{isFilled ? "😍" : "😃"}</Text>
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
              <Button title="Confirmar" disabled={!isFilled} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
