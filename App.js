import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import Transaction from './screens/Transaction'
import SearchScreen from './screens/SearchScreen'
export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
  
 
}
const tabNavigator=createBottomNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:SearchScreen}
})
const AppContainer=createAppContainer(tabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
