  /*Screen to view all the user*/
import React from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import ManageButton from './components/ManageButton';
import ManageButton2 from './components/ManageButton2';


export default class Booked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // book_id: '',  
      isLoading: true,
      dataSource: []
    };
   
  }

  componentWillMount() {
    
    return fetch('http://172.16.31.116/takecare/BookedList.php')
      .then((response) => response.json())
      .then((responseJson) => {
       //  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
 
  GetBookIDFunction=(book_id,book_ser, book_car, book_start, book_end, price, stat, star, cus_id, book_date)=>{
       this.props.navigation.navigate('Third', { 
         ID : book_id,
         SERVICE : book_ser,
         CAR : book_car,
         START : book_start,
         END : book_end,
         PRICE : price,
         STATUS : stat,
         STAR : star,
         CUS : cus_id,
         DATE : book_date
       });
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

  // deleteBook = (book_id) => {
  //     alert(book_id);
  //     db.transaction(tx => {
  //       tx.executeSql(
  //         'DELETE FROM  booked where book_id=?',
  //         [book_id],
  //         (tx, results) => {
  //           // console.log('Results', results.rowsAffected);
  //           alert(JSON.stringify(results));
  //           if (results.rowsAffected > 0) {
  //             Alert.alert(
  //               'Success',
  //               'User deleted successfully',
  //               [
  //                 {
  //                   text: 'Ok',
  //                   onPress: () => that.props.navigation.navigate('Booked'),
  //                 },
  //               ],
  //               { cancelable: false }
  //             );
  //           } else {
  //             alert('Please insert a valid Book Id');
  //           }
  //         }
  //       );
  //     });
  // };


  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#ffffff' }} />
    );
  };

 
  render() { 
    
    if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }
  
    return (
      <Container>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.book_id} style={{ backgroundColor: '#E4E9EC', padding: 20 }}>
              <Text>Id: {item.book_id}</Text>
              <Text>Service: {item.book_ser}</Text>
              <Text>Car: {item.book_car}</Text>
              <Text>Start: {item.book_start}</Text>
              <Text>End: {item.book_end}</Text>
              <Text>Date: {item.book_date}</Text>

              <View style = {{flexDirection: 'row', justifyContent : 'space-around'}}>
              <ManageButton
              title="Edit"  
              customClick={() =>  this.props.navigation.navigate('EditBook', {book_id: item.book_id})  }  
               /> 

              <ManageButton2
              title="Cancle"  
              customClick={() => {this.deleteBook(item.book_id)}}
               /> 

              </View>  
            </View>
          )}
        />

        <Content />
          <Footer>
          <FooterTab style = {{ backgroundColor: '#574344'}}>
            <Button vertical onPress={() => this.props.navigation.navigate('HomeScreen')}>
              {/* <Badge><Text>2</Text></Badge> */}
              <Icon  name="home" />
              <Text>home</Text>
            </Button>
            <Button vertical  onPress={() => this.props.navigation.navigate('called')}>
              <Icon name="time" />
              <Text>histoy</Text>
            </Button>
            <Button active badge vertical style={styles.active} onPress={() => this.props.navigation.navigate('Booked')}>
              <Badge ><Text>2</Text></Badge>
              <Icon active name="book" />
              <Text>book</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  active: {
      backgroundColor: '#B39C8E',
    }
  })