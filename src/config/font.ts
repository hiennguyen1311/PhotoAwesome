import { Platform } from "react-native";

export const fontFamily = {
  ...Platform.select({
    ios: {
      fontLight: 'Larsseit-Light',
      fontRegular: 'Larsseit',
      fontMedium: 'Larsseit-Medium',
      fontBold: 'Larsseit-Bold',
      fontItalic: 'Larsseit-Italic',
    },
    android: {
      fontLight: 'LarsseitLight',
      fontRegular: 'Larsseit',
      fontMedium: 'LarsseitMedium',
      fontBold: 'LarsseitBold',
      fontItalic: 'LarsseitItalic',
    },
  }),
}

export const fontSize = {
  small: 8,
  medium: 12,
  large: 16,
  normal: 20,
  extraLarge: 24,
}

export default {
  fontSize,
  fontFamily,
}
