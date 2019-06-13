import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  NavigationTransitionProps,
} from 'react-navigation';
import NewFeed from '@screen/NewFeed/NewFeed';
import { color, font } from '@config/styleConfig';
// import SearchIconHead from '@components/SearchIconHead/SearchIconHead';
import { moderateScale } from 'react-native-size-matters';
import HeaderTitle from '@component/Header/HeaderTitle';

function newFeedOpt() {
  return {
    headerStyle: {
      backgroundColor: color.primary,
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      color: color.white,
      fontFamily: font.fontFamily.fontRegular,
    },
    headerTitle: <HeaderTitle text={'Awesome'}/>
    //headerRight: <SearchIconHead />,
  };
}

const subMenu = createMaterialTopTabNavigator(
  {
    NewFeed,
  },
  {
    initialRouteName: 'NewFeed',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
      },
    },
    lazy: true,
    tabBarOptions: {
      scrollEnabled: true,
      tabStyle: {
        backgroundColor: color.blueMalibu,
        width: 130,
        height: moderateScale(47),
        alignItems: 'center',
        justifyContent: 'center',
      },
      labelStyle: {
        fontFamily: font.fontFamily.fontRegular,
        fontSize: moderateScale(font.fontSize.medium),
      },
      upperCaseLabel: false,
      indicatorStyle: {
        backgroundColor: color.transparent,
      },
      style: {
        width: undefined,
        backgroundColor: color.primary,
      },
      pressOpacity: 0.8,
      allowFontScaling: false,
    },
  });

function onEndChangeSubMenu(props: NavigationTransitionProps) {
  
}

export const newFeedStack = createStackNavigator(
  {
    subMenu,
  },
  {
    initialRouteName: 'subMenu',
    defaultNavigationOptions: newFeedOpt,
    onTransitionEnd: onEndChangeSubMenu,
  },
);

export default newFeedStack;
