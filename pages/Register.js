import React from 'react';
import { View, Text} from 'react-native';

import {createStackNavigator,createAppContainer} from 'react-navigation';


export default class Register extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Register</Text>
          
        </View>
      );
    }
  }