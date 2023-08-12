import { StyleSheet } from "react-native";

import { theme } from "@/styles";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  text: {
    color: theme.colors.white,
  },
});
