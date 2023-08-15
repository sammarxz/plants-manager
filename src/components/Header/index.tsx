import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { usernameStorageKey } from "@/config/keys";

import { styles } from "./styles";

export function Header() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function loadStoragedUsername() {
      const user = await AsyncStorage.getItem(usernameStorageKey);
      if (user !== null) {
        setUsername(user);
      }
    }

    loadStoragedUsername();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Olá,</Text>
      <Text style={styles.username}>{username}</Text>
    </View>
  );
}
