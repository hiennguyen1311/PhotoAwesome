import { createStackNavigator } from 'react-navigation';
import Setting from '@screen/Setting/Setting';
import { getDefaultHeader } from '@config/styleConfig';
export const settingStackNavigator = createStackNavigator(
  {
    Setting,
  },
  {
    initialRouteName: 'Setting',
    defaultNavigationOptions: getDefaultHeader(),
  },
);

export default settingStackNavigator;
