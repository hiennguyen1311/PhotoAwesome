import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

type HeaderTitleProps =  {
  text: string
}

export default class HeaderTitle extends React.PureComponent<HeaderTitleProps> {
  render() {
    const { text } = this.props
    return <View>
      <Text>{text}</Text>
    </View>
  }
}