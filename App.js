/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import FBSDK, {LoginManager} from 'react-native-fbsdk';

export default class App extends Component {
  fbAuth(){
    LoginManager.logInWithReadPermissions(['public_profile']).then((result) => {
      if (result.isCancelled) {
        console.log('login was cancelled');
      } else {
        console.log('login was success', + result.grantedPermissions.toString());
      }
    }, (error) => {
      console.log('error is ' + error);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={this.fbAuth()}>

        </TouchableOpacity> */}
        <Text>Hello</Text>
      </View>
    );
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
