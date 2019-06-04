import { ViewStyle, TextStyle } from 'react-native';

type Styles = {
  buttonGroup: ViewStyle,
  textButtonGroup: (color: IColor) => TextStyle,
  buttonSignUp: (color: IColor) => ViewStyle,
  buttonLogin: (color: IColor) => ViewStyle,
};

export const styles: Styles = {
  buttonGroup: {
    marginVertical: 50,
  },
  textButtonGroup: (color: IColor) => ({
    color: color.light,
  }),
  buttonSignUp: (color: IColor) => ({
    backgroundColor: color.secondary,
    marginHorizontal: '10%',
  }),
  buttonLogin: (color: IColor) => ({
    marginTop: 10,
    backgroundColor: color.primary,
    marginHorizontal: '10%',
  }),
};
