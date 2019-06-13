import {
  createMaterialTopTabNavigator,
  NavigationScreenProp,
} from 'react-navigation';
import NewFeed from '../stackNav/newFeedStack';
import Setting from '../stackNav/settingStack';
import { getIconTab } from '@component/IconTab/IconTab';

import { color } from '@config/styleConfig';
import { styles } from './styles';

type TabBarIcon = {
  [key: string]: IIconTab;
};
const initIcon = (color: any): TabBarIcon => {
  return {
    NewFeed: {
      active: color.primary,
      inactive: color.inactive,
      isFont: true,
      iconName: 'ios-home'
    },
    Setting: {
      active: color.primary,
      inactive: color.inactive,
      iconName: 'ios-settings',
      isFont: true,
    },
  };
};

let icon: TabBarIcon = initIcon(color);
export function updateIcon(color: any) {
  icon = initIcon(color);
}
export const appTabNavigator = createMaterialTopTabNavigator(
  {
    NewFeed,
    Setting,
  },
  {
    swipeEnabled: false,
    initialRouteName: 'NewFeed',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      indicatorStyle: styles.indicatorStyle,
      pressOpacity: 0.6,
      allowFontScaling: true,
      showIcon: true,
      showLabel: false,
      tabStyle: styles.tabStyle,
      style: styles.tabContainer,
    },
    defaultNavigationOptions: ({ navigation }: { navigation: NavigationScreenProp<any> }) => ({
      tabBarIcon: ({ focused }) => {
        const name: string = navigation.state.routeName;
        return getIconTab(icon[name], focused);
      },
    }),
  },
);

appTabNavigator.navigationOptions = {
  header: null,
};
