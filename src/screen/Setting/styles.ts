import { ViewStyle, TextStyle } from 'react-native';
import { variables, fontFamily } from '@config/styleConfig';

type Styles = {
  separate: (color: IColor) => ViewStyle,
  buildInfo: (color: IColor) => TextStyle,
  grayText: (color: IColor) => TextStyle,
  titleContainer: (color: IColor) => ViewStyle,
  title: (color: IColor) => TextStyle,
};

export const styles: Styles = {
  separate: color => ({
    borderTopWidth: 1,
    borderTopColor: color.grey4,
  }),
  buildInfo: color => ({
    color: color.dark,
    fontSize: variables.fontSizeNormal + 1,
    textAlign: 'center',
  }),
  grayText: color => ({
    color: color.grey3,
    fontSize: variables.fontSizeNormal + 1,
    textAlign: 'center',
  }),
  titleContainer: color => ({
    backgroundColor: color.primary,
    paddingHorizontal: 15,
    paddingVertical: 5,
  }),
  title: color => ({
    color: color.white,
    fontSize: variables.fontSizeNormal + 2,
    fontFamily: fontFamily.fontMedium
  })
};
