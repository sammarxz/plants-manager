import { theme } from '@/styles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.shape,
    paddingHorizontal: 16,
    borderRadius: 12,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerActive: {
    fontFamily: theme.fonts.heading,
    backgroundColor: theme.colors.green_light,
    color: theme.colors.green,
  },
  text: {
    fontFamily: theme.fonts.text,
    color: theme.colors.heading,
  },
  textActive: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.green_dark
  }
})