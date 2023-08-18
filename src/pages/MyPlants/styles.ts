import { theme } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingTop: 32,
    backgroundColor: theme.colors.background,
    gap: 42
  },
  spotlight: {
    backgroundColor: theme.colors.blue_light,
    paddingHorizontal: 16,
    borderRadius: 20,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  spotlightImage: {
    width: 60,
    height: 60
  },
  spotlightText: {
    flex: 1,
    color: theme.colors.blue,
    fontSize: 14,
    fontFamily: theme.fonts.text,
    padding: 8
  },
  plants: {
    flex: 1,
    width: '100%',
    gap: 24,
  },
  plantTitle: {
    fontSize: 24,
    fontFamily: theme.fonts.heading,
    color: theme.colors.heading
  },
  noPlantsContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24
  },
  noPlantsEmoji: {
    fontSize: 72,
  },
  noPlantsText: {
    fontFamily: theme.fonts.complement,
    color: theme.colors.heading,
    fontSize: 18,
    textAlign: 'center'
  },
  noPlantsFooter: {
    width: '100%',
    paddingHorizontal: 60
  }
})