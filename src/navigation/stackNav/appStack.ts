import { createStackNavigator, NavigationTransitionProps } from 'react-navigation';
import { appTabNavigator } from '../tabNav/appTabNavigation';
import { Keyboard } from 'react-native';
import { getDefaultHeader } from '@config/styleConfig';
import ImageSlider from '@screen/ImageSlider/ImageSlider'

const header = getDefaultHeader();
header.headerBackTitle = null;

function onEndChangeSubMenu(props: NavigationTransitionProps) {
  Keyboard.dismiss();
}

export const appStackNavigator = createStackNavigator(
  {
    AppTab: appTabNavigator,
    ImageSlider,
  },
  {
    initialRouteName: 'AppTab',
    defaultNavigationOptions: header,
    headerMode: 'screen',
    onTransitionEnd: onEndChangeSubMenu,
  },
);
export default appStackNavigator;
