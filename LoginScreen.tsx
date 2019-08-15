import * as React from "react";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Image, StyleSheet, View, Text } from "react-native";
import Buttons from "./pages/components/Buttons";
import FormTextInput from "./pages/components/FormTextInput";
import imageLogo from "./img/logo_transparent.png";
import colors from "./pages/config/colors";
import strings from "./pages/config/strings";




interface State {
  email: string;
  password: string;
}

export default class LoginScreen extends React.Component<{}, State> {
  readonly state: State = {
    email: "",
    password: ""
  };

  handleEmailChange = (email: string) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password: string) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={strings.EMAIL_PLACEHOLDER}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
          />
          <Buttons label={strings.LOGIN} onPress={this.handleLoginPress} />

          <Buttons
          label={strings.REGIS}
          onPress={() => this.props.navigation.navigate('Register')}
        />
        </View>
      </View>
    );
  }
}


// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Login: LoginScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Login',
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7BDE2',
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});

