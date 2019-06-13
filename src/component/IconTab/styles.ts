import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';
import { widthWindow } from '@util/common';
import appConfig from '@constant/common';

export const styles = StyleSheet.create({
  iconActive: {
    height: 50,
    width: widthWindow / appConfig.subMenuPage,
  },
  iconStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 20,
    height: 20,
  },
  svgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
