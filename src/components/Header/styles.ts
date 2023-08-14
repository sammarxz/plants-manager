import { theme } from '@/styles'
import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text
  },
  username: {
    fontSize: 32,
    color: theme.colors.heading,
    fontFamily: theme.fonts.heading,
    lineHeight: 40
  }
})