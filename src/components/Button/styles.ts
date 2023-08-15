import { ViewStyle, TextStyle, StyleSheet } from "react-native";

import { theme } from "@/styles";
interface ButtonStyles {
  button: ViewStyle;
  text: TextStyle;
}

export const sharedStyles: ButtonStyles = {
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    height: 56,
  },
  text: {
    fontSize: 16,
    fontFamily: theme.fonts.heading,
    color: theme.colors.white,
  },
};

export const styles = StyleSheet.create({
  primaryButton: {
    ...sharedStyles.button,
    backgroundColor: theme.colors.green,
  },
  secondaryButton: {
    ...sharedStyles.button,
    backgroundColor: theme.colors.shape,
  },
  disabledButton: {
    opacity: 0.5,
  },
  secondaryButtonText: {
    ...sharedStyles.text,
    color: theme.colors.body_dark,
  },
});
