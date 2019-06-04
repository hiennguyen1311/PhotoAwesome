import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';
import { color, fontFamily, variables } from '@config/styleConfig';
import SearchIconHead from '@containers/searchIconHeadContainer/searchIconHeadContainer';
import General from '@containers/careContainer/generalContainer';
import MyTestLab from '@containers/careContainer/myTestLabContainer'
import i18n from '@i18n/i18n';
import { customHeaderTitle } from '@utils/share';
import { moderateScale } from 'react-native-size-matters';
import { store } from '../../App';
import { changeDisplayIconMore } from '@redux/SearchIconHead/action';

function careOtp() {
  onEndChangeSubMenu();
  return {
    headerStyle: {
      backgroundColor: color.pinkCare,
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      color: color.white,
      fontFamily: fontFamily.fontRegular,
    },
    headerTitle: customHeaderTitle(
      i18n.translate('CARE.TITLE'),
    ),
    headerRight: <SearchIconHead />,
  };
}

const subMenu = createMaterialTopTabNavigator(
  {
    General,
    MyTestLab,
  },
  {
    initialRouteName: 'General',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
      },
    },
    lazy: true,
    tabBarOptions: {
      scrollEnabled: false,
      tabStyle: {
        backgroundColor: color.mandyPink,
        height: moderateScale(47),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      },
      labelStyle: {
        fontFamily: fontFamily.fontRegular,
        fontSize: moderateScale(variables.fontSizeNormal),
      },
      upperCaseLabel: false,
      indicatorStyle: {
        backgroundColor: color.transparent,
      },
      style: {
        width: undefined,
        backgroundColor: color.maroonFlushPink,
      },
      pressOpacity: variables.activeOpacity,
      allowFontScaling: false,
    },
  }
)

function onEndChangeSubMenu() {
  const isShow = store.getState().searchIconHead.isRenderBtnRightSidebar;
  let isRenderBtnRightSidebar = false;
  let isAddMyNoteBook = false;

  if (isShow) {
    store.dispatch(changeDisplayIconMore({
      isAddMyNoteBook,
      isRenderBtnRightSidebar,
    }));
  }
}

export const careStack = createStackNavigator(
  {
    subMenu,
  },
  {
    initialRouteName: 'subMenu',
    defaultNavigationOptions: careOtp,
    onTransitionEnd: onEndChangeSubMenu,
  },
);

export default careStack;
