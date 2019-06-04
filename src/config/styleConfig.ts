import color from "./color";
import { NavigationScreenOptions } from "react-navigation";
import font from './font'
import { moderateScale } from "react-native-size-matters";

export {
  color,
  font,
};

export function getDefaultHeader(): NavigationScreenOptions {
  return {
    headerStyle: {
      backgroundColor: color.primary,
      
    },
    headerTitleStyle: {
      color: color.white,
      fontFamily: font.fontFamily.fontMedium,
      fontSize: moderateScale(font.fontSize.medium),
    },
    headerTintColor: 'white',
  };
}
