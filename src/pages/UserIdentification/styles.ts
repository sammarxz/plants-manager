import { theme } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 56,
    alignItems: "center",
    gap: 40,
  },
  header: {
    gap: 24,
    alignItems: "center",
  },
  emoji: {
    fontSize: 44,
  },
  title: {
    fontFamily: theme.fonts.heading,
    fontSize: 24,
    color: theme.colors.heading,
    textAlign: "center",
    lineHeight: 32,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: theme.colors.gray,
    color: theme.colors.heading,
    width: "100%",
    fontSize: 18,
    padding: 10,
    textAlign: "center",
  },
  footer: {
    width: "100%",
    paddingHorizontal: 16,
  },
});
