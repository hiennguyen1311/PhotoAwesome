import { StyleSheet, Platform } from 'react-native';
import { color } from '@config/styleConfig';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { moderateScale } from 'react-native-size-matters';
import font from './font';

export const stylesGlobal = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  button: {
    backgroundColor: color.primary,
    borderRadius: 4,
    padding: 4,
  },
  m10: {
    margin: 10,
  },
  flexCenterAll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparent: {
    backgroundColor: color.transparent,
  },
  customTransparent: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  textLoading: {
    color: color.white,
    fontFamily: font.fontFamily.fontRegular,
    fontSize: font.fontSize.large,
  },
  flexRow: {
    flexDirection: 'row',
  }
});

export default stylesGlobal;
