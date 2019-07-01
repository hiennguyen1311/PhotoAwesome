import { ViewStyle, TextStyle } from 'react-native';
import { IColor } from '@model/interface';
import { widthWindow } from '@util/common';
import font, { fontFamily } from '@config/font';

type Styles = {
  container: (color: IColor) =>  ViewStyle;
  detailContainer: (color: IColor) => ViewStyle;
  modal: (color: IColor) => ViewStyle;
  detailText: (color: IColor) => TextStyle;
  modalContainer: (color: IColor) => ViewStyle;
  modalHeader: ViewStyle;
  imageDetailText: TextStyle;
  buttonContainer: ViewStyle;
  hyperlink: (color: IColor) => TextStyle;
};

export const styles: Styles = {
  container: color => ({
    backgroundColor: color.black,
  }),
  detailContainer: color => ({
    position: 'absolute',
    bottom: 15,
    zIndex: 1000,
    flex: 0.5,
    width: widthWindow,
    paddingHorizontal: 15,
    backgroundColor: color.transparent,
  }),
  modal: color => ({
    backgroundColor: color.white,
    maxHeight: '85%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 5,
  }),
  detailText: color => ({
    color: color.white,
  }),
  modalContainer: color => ({
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    justifyContent: 'space-between',
  }),
  modalHeader: {
    marginTop: 25,
    width: '100%',
    padding: 10,
    alignItems: 'flex-end',
  },
  imageDetailText: {
    fontSize: font.fontSize.large,
    fontFamily: fontFamily.fontMedium,
    margin: 10,
  },
  buttonContainer:{ 
    flexDirection: 'row',
    marginRight: 10,
  },
  hyperlink: color => ({
    color: color.primary,
  }),
};
