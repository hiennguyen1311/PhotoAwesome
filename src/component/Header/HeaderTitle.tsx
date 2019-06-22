import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { styles } from './styles';
import color from '@config/color';

type HeaderTitleProps =  {
  text: string
}

export default class HeaderTitle extends React.PureComponent<HeaderTitleProps> {
  render() {
    const { text } = this.props
    return <View>
      <Text style={styles.headerTitle(color)}>{text}</Text>
    </View>
  }
}