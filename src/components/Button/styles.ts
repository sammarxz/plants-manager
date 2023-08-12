import { StyleSheet } from "react-native";

import { theme } from "@/styles";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: 56,
  },
  disabledButton: {
    opacity: 0.5
  },
  text: {
    fontSize: 16,
    fontFamily: theme.fonts.heading,
    color: theme.colors.white,
  },
});
