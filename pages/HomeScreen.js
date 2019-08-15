/*Home Screen With buttons to navigate to different options*/
import React from 'react';
import { View, Text, StyleSheet,Button, Image, ScrollView } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Mybutton from './components/Mybutton';
import SmallButton from './components/SmallButton';
import imageLogo from "../img/logo_transparent.png";


import Buttons from "./components/Buttons";
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';



var db = openDatabase({ name: 'tc_db.db' });
export default class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='book'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS book', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS book(book_id INTEGER PRIMARY KEY AUTOINCREMENT, book_ser VARCHAR(20), book_car VARCHAR(20), book_start VARCHAR(20), book_end VARCHAR(20))',
              []
            );
          }
        }
      );
    });
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
    // const items = [
    //   { name: 'Call', link : 'Call' }, { name: 'Booking', link: 'Booking' },
    //   { name: 'List Book', link: 'Booked' }, { name: 'AMETHYST', link: '#9b59b6' },
    //   { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
    //   { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
    //   { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    //   { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
    //   { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
    //   { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
    //   { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
    //   { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
    // ];
    return (
      
      <ScrollView
      
        style={{
          flex: 1,
          backgroundColor: '#D7BDE2',
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
        <Image source={imageLogo} style={styles.logo} />

        <View style = {{flexDirection: 'row', justifyContent : 'space-around'}}>
         <SmallButton
          title="Call"
          customClick={() => this.props.navigation.navigate('Call')}
        />
         <SmallButton
          title="Booking"
          customClick={() => this.props.navigation.navigate('Booking')}
        />
          <SmallButton
          title="List"
          customClick={() => this.props.navigation.navigate('Booked')}
        />
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
        

      </ScrollView>
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
  
});