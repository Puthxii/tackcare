  /*Screen to view all the user*/
import React from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator,  Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import ManageButton from './components/ManageButton';
import ManageButton2 from './components/ManageButton2';


export default class Booked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // book_id: '',  
      isLoading: true,
      dataSource: [],
      Default_Rating: 4,
      Max_Rating: 5,
    };
    this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
   
  }
  UpdateRating(key) {
    this.setState({ Default_Rating: key });
  }

  componentWillMount() {
    
    return fetch('http://172.16.156.122/takecare/BookedList.php')
      .then((response) => response.json())
      .then((responseJson) => {
       //  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
        // alert(JSON.stringify(responseJson))
        // let result = responseJson.map(data => data.stat);
        // alert(result)
        // var my_json = JSON.stringify(responseJson)

        // var filtered_json = (JSON.parse(my_json), {stat: 2});
        // let data = JSON.stringify(filtered_json.stat)
        // data2 = responseJson
        // alert(responseJson.book_id)
        // alert(data)
        // if(result == 1){
        //   alert("รอยืนยัน")
        // }else if(result == 2){
        //   alert("ยืนยันแล้ว")
        // }else{
        // }
      })
      .catch((error) => {
        console.error(error);
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


  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#ffffff' }} />
    );
  };

  DeleteBook = () =>{ 
    fetch('http://172.16.156.122/takecare/DeleteBook.php', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      book_id : this.state.book_id
    })
  
    }).then((response) => response.json())
    .then((responseJson) => {
      // Showing response message coming from server after inserting records.
      Alert.alert(responseJson);
    }).catch((error) => {
       console.error(error);
    })
    this.props.navigation.navigate('Booked');
  }

  render() { 
    let React_Native_Rating_Bar = [];
    for (var i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
          onPress={this.UpdateRating.bind(this, i)}>
          <Image
            style={styles.StarImage}
            source={
              i <= this.state.Default_Rating
                ? { uri: this.Star }
                : { uri: this.Star_With_Border }
            }
          />
        </TouchableOpacity>
      );
    }
    
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
              <View>
                  {
                  item.stat == 1
                    ?
                    <Text style = {{ color: '#FF6800'}}>Status: Awaiting confirmation</Text> 
                    :
                    <Text style = {{ color: '#28B463'}}>Status: Confirmed</Text>
                  }
              </View>
              <View style={styles.MainContainer}>
       
                <View style={styles.childView}>{React_Native_Rating_Bar}</View>
                
              </View>
              <View style = {{flexDirection: 'row', justifyContent : 'space-around'}}>
              <ManageButton
              title="Edit"  
              customClick={() =>  this.props.navigation.navigate('EditBook', {
                book_id: item.book_id,
                book_ser: item.book_ser,
                book_car: item.book_car,
                book_start: item.book_start,
                book_end: item.book_end,
                price: item.price,
                stat: item.stat,
                star: item.star,
                cus_id: item.cus_id,
                book_date: item.book_date,
              })  }  
               /> 

              <ManageButton2
              title="Cancle"  
              customClick={() => {this.DeleteBook(item.book_id)}}
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
            <Button vertical onPress={() => this.props.navigation.navigate('Profile')}>
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
    },
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    childView: {
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 30,
    },
    button: {
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 30,
      padding: 15,
      backgroundColor: '#8ad24e',
    },
    StarImage: {
      width: 20,
      height: 20,
      resizeMode: 'cover',
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 23,
      color: '#000',
      marginTop: 15,
    },
    textStyleSmall: {
      textAlign: 'center',
      fontSize: 16,
      color: '#000',
      marginTop: 15,
    },
  })