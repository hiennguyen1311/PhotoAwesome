import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { appStackNavigator } from './stackNav/appStack';
import { authStackNavigator } from './stackNav/authStack';

export const createRootNavigator = (signedIn = false) => {
  return createAppContainer(createSwitchNavigator(
    {
      appNavigator: appStackNavigator,
      authNavigator: authStackNavigator,
    },
    {
      initialRouteName: signedIn ? 'appNavigator' : 'authNavigator',
    },
  ));
};

export default createRootNavigator;
