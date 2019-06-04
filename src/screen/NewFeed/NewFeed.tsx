import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationScreenProp, NavigationScreenOptions } from 'react-navigation';
import { color } from '@config/styleConfig';
import i18n from '@i18n/i18n';
import { styles } from './styles';
import { api } from '@config/api';
import stylesGlobal from '@config/styleGlobal';

type PropsNewFeed = {
  navigation: NavigationScreenProp<any>,
};
type StateNewFeed = {
  isLoading: boolean
};

export default class NewFeedScreen extends Component<PropsNewFeed, StateNewFeed>{

  /**
   * Custom navigation.
   * @returns object NavigationScreenOptions.
   */
  static navigationOptions = (): NavigationScreenOptions => {
    return {
      title: i18n.translate('NEW_FEED.NEW_FOR_ME'),
      headerStyle: {
        backgroundColor: color.greenRicoDark,
      },
    };
  }

  render() {
    return (
      <View style={stylesGlobal.flex1}>
      </View>
    );
  }
}
