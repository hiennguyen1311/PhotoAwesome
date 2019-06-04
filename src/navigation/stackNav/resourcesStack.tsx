import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator, NavigationTransitionProps } from 'react-navigation';
import PFFSupportNetwork from '@containers/resourcesContainer/pffContainer';
import TakeAction from '@containers/resourcesContainer/takeActionContainer';
import ClinicalTrial from '@containers/resourcesContainer/clinicalTrialContainer';
import FinancialAssistance from '@containers/resourcesContainer/financialAssistanceContainer';
import ReferAFriend from '@containers/resourcesContainer/referAFriendContainer';
import SuggestArticle from '@containers/resourcesContainer/suggestArticleContainer';
import TrendingArticle from '@containers/resourcesContainer/trendingArticleContainer';
import { fontFamily, color, variables } from '@config/styleConfig';
import SearchIconHead from '@containers/searchIconHeadContainer/searchIconHeadContainer';
import { moderateScale } from 'react-native-size-matters';
import i18n from '@i18n/i18n';
import { customHeaderTitle } from '@utils/share';
import { store } from '../../App';
import { changeDisplayIconMore } from '@redux/SearchIconHead/action';

function resourceOtp() {
  store.dispatch(changeDisplayIconMore({
    isAddMyNoteBook: false,
    isRenderBtnRightSidebar: true,
    typeRoute: 'Resources',
  }));
  return {
    headerStyle: {
      backgroundColor: color.yellowLightning,
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      color: color.white,
      fontFamily: fontFamily.fontRegular,
    },
    headerTitle: customHeaderTitle(
      i18n.translate('RESOURCES.TITLE'),
    ),
    headerRight: <SearchIconHead routeName="Resource" />,
  };
}

function onEndChangeSubMenu(props: NavigationTransitionProps) {
  const isShow = store.getState().searchIconHead.isRenderBtnRightSidebar;
  let isRenderBtnRightSidebar = true;

  if (isShow !== isRenderBtnRightSidebar) {
    store.dispatch(changeDisplayIconMore({
      isAddMyNoteBook: false,
      isRenderBtnRightSidebar,
    }));
  }
}

const subMenu = createMaterialTopTabNavigator(
  {
    PFFSupportNetwork,
    TakeAction,
    ClinicalTrial,
    FinancialAssistance,
    ReferAFriend,
    SuggestArticle,
    TrendingArticle,
  },
  {
    initialRouteName: 'PFFSupportNetwork',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
      },
    },
    lazy: true,
    tabBarOptions: {
      scrollEnabled: true,
      tabStyle: {
        backgroundColor: color.yellowSun,
        width: 170,
        height: moderateScale(47),
        alignItems: 'center',
        justifyContent: 'center',
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
        backgroundColor: color.yellowGalliano,
      },
      pressOpacity: variables.activeOpacity,
      allowFontScaling: false,
    },
  }
)

export const resourcesStack = createStackNavigator(
  {
    subMenu,
  },
  {
    initialRouteName: 'subMenu',
    defaultNavigationOptions: resourceOtp,
    onTransitionEnd: onEndChangeSubMenu,
  },
);

export default resourcesStack;
