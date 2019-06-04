import { createStackNavigator } from 'react-navigation';
import MyProfile from '@containers/myProfileContainer/myProfileContainer';
import { getDefaultHeader } from '@config/styleConfig';

export const myProfileStack = createStackNavigator(
  {
    MyProfile,
  },
  {
    initialRouteName: 'MyProfile',
    defaultNavigationOptions: getDefaultHeader(),
  },
);

export default myProfileStack;
