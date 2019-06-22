import React from 'react';
import { Modal, ActivityIndicator, View } from 'react-native';
import stylesGlobal from '@config/styleGlobal';
import color from '@config/color';
import { Text } from 'react-native-elements';

type CustomSpinnerProps = {
  isVisible?: boolean;
  text?: string;
}

export default class CustomSpinner extends React.PureComponent<CustomSpinnerProps> {
  render() {
    const { isVisible = false, text } = this.props
    return <Modal visible={isVisible} transparent>
      <View style={[stylesGlobal.flexCenterAll, stylesGlobal.customTransparent]}>
        <ActivityIndicator color={color.white} size='small'/>
        {text && <Text style={stylesGlobal.textLoading}>{text}</Text> }
      </View>
    </Modal>
  }
}
