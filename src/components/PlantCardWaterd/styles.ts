import {StyleSheet} from 'react-native'

import { theme } from '@/styles'

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.shape,
    marginBottom: 16,
    gap: 12
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.heading,
    fontSize: 18,
    flex: 1,
  },
  details: {
    alignItems: "flex-end",
    gap: 4
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: theme.fonts.text,
    color: theme.colors.body_light,
  },
  time: {
    fontSize: 16,
    fontFamily: theme.fonts.heading,
    color: theme.colors.body_dark,
  },
  buttonRemove: {
    width: 100,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 0,
    paddingHorizontal: 32,
    paddingVertical: 32,
    borderRadius: 20
  }
});
