import { ViewStyle, TextStyle } from 'react-native';
import { IColor } from '@model/interface';
import font from '@config/font';

type Styles = {
  headerTitle: (color: IColor) =>  TextStyle;
};

export const styles: Styles = {
  headerTitle: color => ({
    color: color.white,
    fontFamily: font.fontFamily.fontMedium,
    fontSize: font.fontSize.normal,
  }),
};
