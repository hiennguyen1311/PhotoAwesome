import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';

import i18n from '@i18n/i18n';
import { styles } from './styles';

interface DashboardParams {
}

type propDashboard = {
  navigation: NavigationScreenProp<DashboardParams>,
};

export default class DashboardLogin extends Component<propDashboard>{
  static navigationOptions = { header: null };
  i18nKey = 'DASHBOARD_LOGIN';

  /**
   * on press login
   * directional to screen Login
   */
  onPressLogin = () => {
    this.props.navigation.navigate('Login');
  }

  /**
   * on press signUp
   * directional to screen SignUp
   */
  onPressSignUp = () => {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return <View></View>
  }
}
