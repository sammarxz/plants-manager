import {StyleSheet} from 'react-native'

import { theme } from '@/styles'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingTop: 32,
    flex: 1,
    gap: 24,
  },
  header: {
    paddingHorizontal: 32
  },
  question: {
    paddingHorizontal: 32,
    marginTop: 8
  },
  questionTitle: {
    fontSize: 18,
    fontFamily: theme.fonts.heading,
    color: theme.colors.heading,
  },
  questionSubtitle: {
    fontSize: 18,
    fontFamily: theme.fonts.text,
    color: theme.colors.heading
  },
  options: {
    gap: 8,
    paddingHorizontal: 32,
  },
  plantsWrapper: {
    flex: 1,
    marginTop: 8,
  },
  plants: {
    paddingHorizontal: 24,
    paddingBottom: 32
  },
})