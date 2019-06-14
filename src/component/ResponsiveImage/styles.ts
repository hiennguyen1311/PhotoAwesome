import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';
import { widthWindow } from '@util/common';
import appConfig from '@constant/common';

type Styles = {
  image: (width: number, height: number) => ImageStyle
}

export const styles: Styles  = {
  image: (width: number, height: number) => ({
    width,
    height,
    borderRadius: 4
  }),
};
