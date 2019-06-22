import React from 'react';
import { StatusBar } from 'react-native';

type CustomStatusBarProps = {
  isLight?: boolean;
}

export default class CustomStatusBar extends React.PureComponent<CustomStatusBarProps> {
  render() {
    const { isLight } = this.props
    return <StatusBar
      barStyle={isLight ? 'light-content': 'dark-content'}
    />
  }
}
