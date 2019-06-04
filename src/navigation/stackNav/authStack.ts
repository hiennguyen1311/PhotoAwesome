import { createStackNavigator } from 'react-navigation';
import DashboardLogin from '@screen/DashboardLogin/DashboardLogin';

export const authStackNavigator = createStackNavigator(
  {
    DashboardLogin,
  },
  {
    initialRouteName: 'DashboardLogin',
    defaultNavigationOptions: {
      headerTransparent: true,
      headerBackTitle: null,
    },
  },
);

export default authStackNavigator;
