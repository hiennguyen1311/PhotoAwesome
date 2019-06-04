import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Linking } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { ListItem, Icon, ListItemProps, Text } from 'react-native-elements';
import i18n from '@i18n/i18n';
import { color } from '@config/styleConfig';
import { styles } from './styles';

import HeaderTitle from '@component/Header/HeaderTitle';
import stylesGlobal from '@config/styleGlobal';
const i18Key = 'SETTING';

interface SettingParams {
}
type PropsSetting = {
  navigation: NavigationScreenProp<SettingParams>,
  logoutUser: () => void,
  changeLanguage: (lang: enumLanguage) => void,
  changeTheme: (theme: string) => ThemeAction
  language: string | undefined,
  theme: string,
};
interface ItemSetting extends ListItemProps {
  id: string;
  text: string;
}

interface ItemSection {
  title?: string;
  item: ItemSetting[];
}

export default class SettingScreen extends Component<PropsSetting>{
  static navigationOptions = () => {
    return {
      headerTitle: <HeaderTitle text={i18n.translate('SETTING.TITLE')} />,
      headerStyle: {
        backgroundColor: color.primary,
      },
    };
  }

  render() {
    return <View style={stylesGlobal.flex1}>
    </View>;
  }
}
