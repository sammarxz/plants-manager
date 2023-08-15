import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '@/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.shape,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 36,
    paddingVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.shape,
    gap: 16
  },
  plantName: {
    fontFamily: theme.fonts.heading,
    color: theme.colors.heading,
    fontSize: 24
  },
  plantAbout: {
    fontFamily: theme.fonts.text,
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 18,
  },
  controller: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 36,
    paddingTop: 36,
    paddingBottom: getBottomSpace() || 36,
    // justifyContent: 'space-between'
  },
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.blue_light,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
    borderRadius: 20,
    position: 'relative',
    bottom: 80,
  },
  tipImage: {
    width: 56,
    height: 56
  },
  tipText: {
    flex: 1,
    color: theme.colors.blue,
    fontFamily: theme.fonts.text,
    fontSize: 16,
    padding: 12
  },
  alertLabel: {
    textAlign: 'center',
    fontFamily: theme.fonts.complement,
    color: theme.colors.heading,
    fontSize: 14,
    marginBottom: 4
  },
  dateTimePicker: {
    flex: 1,
    gap: 8
  },
})