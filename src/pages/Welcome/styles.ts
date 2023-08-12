import { StyleSheet } from "react-native";

import { theme } from "@/styles";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 48,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.heading,
    fontSize: 32,
    textAlign: "center",
    marginTop: 38,
    lineHeight: 38,
  },
  subtitle: {
    fontFamily: theme.fonts.text,
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: theme.colors.heading,
    maxWidth: 340,
  },
  button: {
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    color: theme.colors.white,
    fontSize: 24,
  },
});
