/*Example of SQLite Database in React Native*/
import React from 'react';
import { Button, View, Text } from 'react-native';
//For React Navigation Version 2+
//import {createStackNavigator} from 'react-navigation';
//For React Navigation Version 3+
import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
import Register from './pages/Register';
import LoginScreen from './LoginScreen';
import Call from './pages/Call';
import Booking from './pages/Booking';
import Booked from './pages/Booked';
import called from './pages/called';
import EditBook from './pages/EditBook';





const App = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    // navigationOptions: {
    //   title: 'Take Care',
    //   headerStyle: { backgroundColor: '#95E8D7' },
    //   headerTintColor: '#8971D0',
    //   headerRight: (
    //     <Button
    //       onPress={() => navigation.navigate('LoginScreen')}
    //       title="Info"
    //       color="#fff"
    //     />
    //   ),
    // },
   

  
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Take Care',
      headerStyle: { backgroundColor: '#95E8D7' },
      headerTintColor: '#8971D0',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#95E8D7' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#95E8D7' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: { backgroundColor: '#95E8D7' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#95E8D7' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: { backgroundColor: '#95E8D7' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
      headerStyle: { backgroundColor: '#95E8D7' },
      headerTintColor: '#8971D0',
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',
      headerStyle: { backgroundColor: '#95E8D7' },
      headerTintColor: '#8971D0',
    },
  },
  Call: {
    screen: Call,
    navigationOptions: {
      title: 'Call',
      headerStyle: { backgroundColor: '#95E8D7' },
      headerTintColor: '#8971D0',
    },
  },
  Booking: {
    screen: Booking,
    navigationOptions: {
      title: 'Booking',
      headerStyle: { backgroundColor: '#95E8D7' },
      headerTintColor: '#8971D0',
    },
  },
  Booked: {
    screen: Booked,
    navigationOptions: {
      title: 'Booked',
      headerStyle: { backgroundColor: '#95E8D7' },
      headerTintColor: '#8971D0',
    },
  },
  called: {
    screen: called,
    navigationOptions: {
      title: 'History Call',
      headerStyle: { backgroundColor: '#95E8D7' },
      headerTintColor: '#8971D0',
    },
  },
  EditBook: {
    screen: EditBook,
    navigationOptions: {
      title: 'Edit Book',
      headerStyle: { backgroundColor: '#95E8D7' },
      headerTintColor: '#8971D0',
    },
  },
});
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);