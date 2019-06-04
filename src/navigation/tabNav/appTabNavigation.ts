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
      active: color.grayAthens,
      inactive: color.greenRico,
      isFont: false,
      svgColorActive: color.white,
    },
    Setting: {
      active: color.grayAthens,
      inactive: color.secondary,
      iconName: 'ios-menu',
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
      allowFontScaling: false,
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
