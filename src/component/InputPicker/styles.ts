import { ViewStyle, TextStyle } from 'react-native';
import { isIOS } from '@util/common';
import { color } from '@config/styleConfig';

type Styles = {
  iconStyle: ViewStyle;
};

type Picker = {
  viewContainer: ViewStyle,
  inputIOSContainer: ViewStyle,
  modalViewBottom: ViewStyle,
  inputAndroid: TextStyle,
};

export const styles: Styles = {
  iconStyle: {
    paddingEnd: isIOS ? 10 : 0,
  },
};

export const stylePicker: Picker = {
  viewContainer: {
    height: 54,
    position: 'absolute', top: 15, left: 0, right: 0,
  },
  inputIOSContainer: {
    height: 54,
    backgroundColor: color.transparent,
  },
  modalViewBottom: {
    backgroundColor: color.white,
  },
  inputAndroid: {
    color: color.transparent,
  },
};
