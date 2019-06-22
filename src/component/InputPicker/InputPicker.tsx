import React, { Component } from 'react';
import { View, ViewStyle } from 'react-native';

import RNPickerSelect, { PickerProps, Item } from 'react-native-picker-select';
import { InputCustom } from '@component/InputCustom/InputCustom';
import { Icon, InputProps } from 'react-native-elements';
import { color } from '@config/styleConfig';

import { styles, stylePicker } from './styles';
import { TextFieldProps } from 'react-native-material-textfield';

interface ExtPickerProp extends Partial<PickerProps> {
  onValueChange?: (value: any, index: number) => void;
  items?: Item[];
}

type PropsInputPicker = {
  items: any[],
  label?: string | undefined,
  containerStyle?: ViewStyle,
  onChangeValuePicker: (value: any, index: number) => void,
  errorMessage?: string,
  inputProps?: InputProps & TextFieldProps,
  pickerProp?: ExtPickerProp,
  pickerStyle?: object,
  value: any,
};

type State = {
  selected: any,
  value: any,
};

export class InputPicker extends Component<PropsInputPicker, State> {
  state = {
    selected: undefined,
    value: undefined,
  };

  picker: RNPickerSelect | null = null;

  constructor(props: PropsInputPicker) {
    super(props);
    this.state.value = props.value;
    this.state.selected = props.value;
  }

  refPicker = (r: RNPickerSelect) => this.picker = r;

  /**
   * on change value picker
   * @param value any
   * @param index number
   */
  onChangeValuePicker = (value: any, index: number) => {
    this.setState({
      selected: value,
    }, () => {
      this.props.onChangeValuePicker(value || '', index);
    });
  }

  renderIcon = () => (<View></View>);

  render() {
    const {
      items, label,
      containerStyle, errorMessage,
      inputProps, pickerProp,
      pickerStyle = {},
      value,
    } = this.props;
    const stylePick = { ...stylePicker, ...pickerStyle };
    return <View style={containerStyle}>
      <InputCustom
        label={label}
        pointerEvents="none"
        value={value}
        rightIcon={
          <Icon type="ionicon" color={color.primary} size={20}
            name="md-arrow-dropdown" containerStyle={styles.iconStyle} />
        }
        errorMessage={errorMessage || ''}
        autoCapitalize="none"
        {...inputProps} />
      <RNPickerSelect
        placeholderTextColor={color.transparent}
        textInputProps={{ style: { color: color.transparent } }}
        style={stylePick}
        itemKey={this.state.value}
        ref={this.refPicker}
        items={items}
        {...pickerProp}
        onValueChange={this.onChangeValuePicker}
        Icon={this.renderIcon}
      />
    </View>;
  }
}
