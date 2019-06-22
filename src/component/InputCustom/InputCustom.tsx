import React, { Component } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { Input, InputProps } from 'react-native-elements';
import { TextField, TextFieldProps } from 'react-native-material-textfield';

import { isIOS } from '@util/common';
import { stylesGlobal } from '@config/styleGlobal';
import { styles } from './styles';

export class InputCustom extends Component<InputProps | TextFieldProps, TextFieldProps>{
  onBlur = () => {
    Keyboard.dismiss();
  }
  inputAndroid = (attributes: InputProps | TextFieldProps) => {
    const { rightIcon, errorMessage } = this.props as InputProps;
    const iconRight = rightIcon ?
      <View style={StyleSheet.flatten([styles.containerIcon])}>{rightIcon}</View> : null;
    const inputConStyle = rightIcon ? styles.inputIconRight : {};
    return (
      <View style={stylesGlobal.flexRow}>
        <View style={StyleSheet.flatten([stylesGlobal.flex1])}>
          <TextField
            inputContainerStyle={inputConStyle}
            error={errorMessage}
            onBlur={this.onBlur}
            {...attributes} />
        </View>
        {iconRight}
      </View >
    );
  }
  render() {
    const { ...attributes } = this.props;
    if (isIOS) {
      return <Input {...attributes} onBlur={this.onBlur} />;
    }
    return this.inputAndroid(attributes);
  }
}
