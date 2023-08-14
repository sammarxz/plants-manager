import { StyleSheet } from 'react-native';

import { theme } from '@/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.shape,
    maxWidth: '45%',
    minHeight: 175,
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    gap: 12
  },
  text: {
    color: theme.colors.green_dark,
    fontFamily: theme.fonts.heading,
  },
})