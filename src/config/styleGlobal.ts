import { StyleSheet, Platform } from 'react-native';
import { color } from '@config/styleConfig';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { moderateScale } from 'react-native-size-matters';

export const stylesGlobal = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  button: {
    backgroundColor: color.primary,
    borderRadius: 4,
    padding: 4,
  }
});

export default stylesGlobal;
