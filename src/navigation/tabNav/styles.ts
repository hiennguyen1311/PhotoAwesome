import { StyleSheet, Platform } from 'react-native';
import { color } from '@config/styleConfig';
import { isIphoneX } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  careIconStyle: {
    marginTop: 4,
  },
  tabStyle: {
    minHeight: 70,
    backgroundColor: color.white,
    opacity: 1,
    marginBottom: Platform.OS === 'ios' && isIphoneX() ? 15 : 0,
  },
  tabContainer: {
    backgroundColor: color.white,
    ...Platform.select({
      ios: {
        shadowColor: color.dark,
        shadowOpacity: 0.5,
        shadowRadius: 2,
      },
      android: {
        borderTopColor: color.grey5,
        borderTopWidth: 1,
      },
    }),
  },
  indicatorStyle: {
    backgroundColor: color.transparent,
    height: 0,
  },
});
