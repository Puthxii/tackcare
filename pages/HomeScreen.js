/*Home Screen With buttons to navigate to different options*/
import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
   
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Take Care',
      headerStyle: { backgroundColor: '#95E8D7' },
      headerTintColor: '#8971D0',
      headerRight: (
        <Button 
          onPress={() => navigation.navigate('LoginScreen')}
          title="Login"
          color="#957DAD"
        />
      )
    }
  }

  // static navigationOptions = {
  //   title: 'Take Care',
  //   headerStyle: { backgroundColor: '#95E8D7' },
  //   headerTintColor: '#8971D0',
  //   headerRight: (
  //     <Button
  //       onPress={() => this.props.navigation.navigate('LoginScreen')}
  //       title="Info"
  //       color="#fff"
  //     />
  //   ),
  // };
  

  render() {
 
    return (
      
      <Container
      
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          flexDirection: 'column',
          // justifyContent: 'flex-start',
        }}>
        {/* <Mytext text="SQLite Example" /> */}
        {/* <FlatGrid
          itemDimension={100}
          items={items}
          style={styles.gridView}
          staticDimension={350}
          fixed
          spacing={5}
            renderItem={({ item, index }) => (
           
              <View   style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.code}</Text>
                <Text style={styles.itemCode} >{item.name} </Text>
                  <SmallButton 
                    title=""
                    customClick={() => this.props.navigation.navigate('Call')}
                  />
              </View> 
            )}
        /> */}
        {/* <Mybutton
          title="Register"
          customClick={() => this.props.navigation.navigate('Register')}
        />
        <Mybutton
          title="Update"
          customClick={() => this.props.navigation.navigate('Update')}
        />
        <Mybutton
          title="View"
          customClick={() => this.props.navigation.navigate('View')}
        />
        <Mybutton
          title="View All"
          customClick={() => this.props.navigation.navigate('ViewAll')}
        />
        <Mybutton
          title="Delete"
          customClick={() => this.props.navigation.navigate('Delete')}
        />
         <Mybutton
          title="Details Screen"
          customClick={() => this.props.navigation.navigate('DetailsScreen')}
        /> */}
        {/* <Image source={imageLogo} style={styles.logo} /> */}

        <View style = {{flexDirection: 'row', justifyContent : 'space-around'}}>
         <Button  style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Call')}>
          <Icon name="call" />
          <Text>Call</Text>
        </Button>
         <Button  style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Booking')}>
          <Icon name="book" />
          <Text>Booking</Text>
        </Button>
        <Button  style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('')}>
          <Icon name="help" />
          <Text></Text>
        </Button>

        </View>

        {/* <View style = {{flexDirection: 'row', justifyContent : 'space-around'}}>
        <SmallButton
          title="Login"
          customClick={() => this.props.navigation.navigate('LoginScreen')}
        />
         <SmallButton
          title="Login"
          customClick={() => this.props.navigation.navigate('LoginScreen')}
        />
         <SmallButton
          title="Login"
          customClick={() => this.props.navigation.navigate('LoginScreen')}
        />
        </View> */}
        <Content />
          <Footer>
          <FooterTab style = {{ backgroundColor: '#574344'}}>
            <Button active vertical style={styles.active}>
              {/* <Badge><Text>2</Text></Badge> */}
              <Icon active name="home" />
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
            <Button vertical onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}


const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center"
  },
  buttonContainer: {
    alignItems: 'center',
    // justifyContent: 'flex-start',
    backgroundColor: '#B39C8E',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    // marginLeft: 35,
    // marginRight: 35,
    width: 75, height: 75,
    borderRadius : 16
  },
  active: {
    backgroundColor: '#B39C8E',

  }
  
});