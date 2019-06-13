import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import routeNavigator from './src/navigation/routeNavigator';
import stylesGlobal from '@config/styleGlobal';
import sagaMiddleware from '@redux/sagaMiddleware';
import rootSaga from '@redux/rootSaga';
import configureStore from '@redux/configureStore';
import { Provider } from 'react-redux';

type Props = {};
export const store = configureStore();
sagaMiddleware.run(rootSaga);
export default class App extends Component<Props> {
  render() {
    const AppContainer = routeNavigator(true);
    const content =
      <Provider store={store}>
        <ThemeProvider>
          <View style={stylesGlobal.flex1}>
            {/* {statusBar}
          <OfflineBar /> */}
            <AppContainer></AppContainer>
          </View>
        </ThemeProvider>
      </Provider>;

    return content;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
