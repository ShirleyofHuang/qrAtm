import React from 'react';
import { StyleSheet, Text, View, Navigator} from 'react-native';
import FixedHeader from './header';
import {StackNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation';

export default class App extends React.Component{
  render(){
  return (
    <View>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <FixedHeader></FixedHeader>
      {/* <Navigator initialRoute={{id:'Home'}}
        renderScene = {this.navigatorRenderScene} /> */}
    </View>
  );
}
}

export default createStackNavigator({
  Login: {
    screen: LoginScreen
  }
})

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
});
