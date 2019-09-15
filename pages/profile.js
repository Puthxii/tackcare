import React, { Component } from 'react';
import {StyleSheet, View, Image, TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';


export default class Profile extends Component {

  render() {
    return (
      <Container style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://zoltonlaw.com/wp-content/uploads/2016/08/Grandma-grandchild.jpg'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Samon Kungking</Text>
              {/* <Text style={styles.info}>UX Designer / Mobile developer</Text> */}
              <Text style={styles.description}>0937090348</Text>
              <Text style={styles.description}>123/1 m.3 Si Lom Bang rak Thailand 10500</Text>
              
              {/* <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 1</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 2</Text> 
              </TouchableOpacity> */}
            </View>
        </View>
        <Content />
          <Footer>
          <FooterTab style = {{ backgroundColor: '#574344'}}>
            <Button vertical onPress={() => this.props.navigation.navigate('HomeScreen')}>
              {/* <Badge><Text>2</Text></Badge> */}
              <Icon name="home" />
              <Text>home</Text>
            </Button>
            <Button vertical  onPress={() => this.props.navigation.navigate('called')}>
              <Icon name="time" />
              <Text>histoy</Text>
            </Button>
            <Button badge vertical onPress={() => this.props.navigation.navigate('Booked')}>
              <Badge ><Text>2</Text></Badge>
              <Icon name="book" />
              <Text>book</Text>
            </Button>
            <Button active vertical style={styles.active} onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon active name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#6A7C64",
    height:100,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:40
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  active: {
    backgroundColor: '#B39C8E',
  },
});