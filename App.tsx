import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import routeNavigator from './src/navigation/routeNavigator';
import stylesGlobal from '@config/styleGlobal';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const AppContainer = routeNavigator(true);
    const content = 
      <ThemeProvider>
        <View style={stylesGlobal.flex1}>
          {/* {statusBar}
          <OfflineBar /> */}
          <AppContainer></AppContainer>
        </View>
      </ThemeProvider>;
    
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
