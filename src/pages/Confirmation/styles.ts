import { theme } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 56,
    gap: 40
  },
  header:{
    alignItems: 'center',
    gap: 8
  },
  emoji: {
    fontSize: 72
  },
  title: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.heading,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 24
  },
  subtitle: {
    fontFamily: theme.fonts.complement,
    color: theme.colors.heading,
    fontSize: 18,
    textAlign: 'center'
  },
  footer: {
    width: '100%',
    paddingHorizontal: 16
  }
})