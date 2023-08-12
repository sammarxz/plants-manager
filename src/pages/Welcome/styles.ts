import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: colors.heading,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 38,
    maxWidth: 222,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    maxWidth: 288,
  },
  button: {
    marginBottom: 10,
    height: 56,
    width: 56,
  },
});
