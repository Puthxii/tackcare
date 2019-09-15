  /*Screen to register the user*/
  import React from 'react';
  import { View, ScrollView, KeyboardAvoidingView, Alert, StyleSheet, Picker, Text  } from 'react-native';
  import Mytextinput from './components/Mytextinput';
  import Mybutton from './components/Mybutton';
  import { openDatabase } from 'react-native-sqlite-storage';
  import MButton from './components/MButton';
  import DatePicker from 'react-native-datepicker';
  
  var db = openDatabase({ name: 'tc_db.db' });
  export default class Booking extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        book_ser: '',
        book_car: '',
        book_start: '',
        book_end: '',
        price : '140',
        stat : '1',
        star : '',
        cus_id : '1',
        book_date : ''
      };
    }
  
  
    state = {department: ''}
    updateDepartment = (department) => {
       this.setState({ department: department })
    }
  
    InsertStudentRecordsToServer = () =>{
 
      fetch('http://172.16.28.148/takecare/InsertBook.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
        book_ser : this.state.book_ser,
        book_car : this.state.book_car,
        book_start : this.state.book_start,
        book_end : this.state.book_end,
        price : this.state.price,
        stat : this.state.stat,
        star : this.state.star,
        cus_id : this.state.cus_id,
        book_date : this.state.book_date
      })
 
      }).then((response) => response.json())
          .then((responseJson) => {
            // Showing response message coming from server after inserting records.
          // Alert.alert(responseJson);
          Alert.alert(
            'Success',
            'You are Book Successfully, Plese wait Awaiting confirmation',
            [
              {
                text: 'Ok',
                onPress: () =>
                  this.props.navigation.navigate('HomeScreen'),
              },
            ],
            { cancelable: false }
          );
          }).catch((error) => {
            console.error(error);
          });
    }

    render() {
      return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
          <Picker style={[styles.picker]} itemStyle={styles.pickerItem} selectedValue = {this.state.department} onValueChange = {book_ser => this.setState({ book_ser })}>
                 <Picker.Item label = "Select Service" value = "" />
                 <Picker.Item label = "Car" value = "Car" />
                 <Picker.Item label = "Car and Care" value = "Car And Tak Care" />
                 {/* <Picker.Item label = "Civil" value = "Civil" />
                 <Picker.Item label = "Chemical" value = "Chemical" />
                 <Picker.Item label = "Material" value = "Material" />
                 <Picker.Item label = "Environment" value = "Environment" /> */}
              </Picker>
              <Text style = {styles.text}>{this.state.book_ser}</Text>
  
          <Picker style={[styles.picker]} itemStyle={styles.pickerItem} selectedValue = {this.state.department} onValueChange = {book_car => this.setState({ book_car })}>
                 <Picker.Item label = "Select car" value = "" />
                 <Picker.Item label = "Van" value = "Van" />
                 <Picker.Item label = "Sedan" value = "Sedan" />
                 <Picker.Item label = "Coupe" value = "Coupe" />
                 <Picker.Item label = "Premium" value = "Premium" />
                 {/* <Picker.Item label = "Civil" value = "Civil" />
                 <Picker.Item label = "Chemical" value = "Chemical" />
                 <Picker.Item label = "Material" value = "Material" />
                 <Picker.Item label = "Environment" value = "Environment" /> */}
              </Picker>
              <Text style = {styles.text}>{this.state.book_car}</Text>
            
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Start point"
                onChangeText={book_start => this.setState({ book_start })}
                style={{ padding:10 }}
              />
              <Mytextinput
                placeholder="End point"
                onChangeText={book_end => this.setState({ book_end })}
                maxLength={10}
                style={{ padding:10 }}
              />
              {/* <Mytextinput
                placeholder="Enter Address"
                onChangeText={user_address => this.setState({ user_address })}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top',padding:10 }}
              /> */}
              
              <DatePicker
              style={styles.input}
              date={this.state.book_date} //initial date from state
              mode="datetime" //The enum of date, datetime and time
              placeholder="select date and time"
              format="YYYY-MM-DD hh:mm:ss a"
              minDate={new Date()}
              maxDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                }
              }}
              
              onDateChange={(book_date) => {this.setState({book_date: book_date})}}
              />
              <MButton
                title="Booking"
                customClick={this.InsertStudentRecordsToServer.bind(this)}
              />
            </KeyboardAvoidingView>
        
           
  
          </ScrollView>
        </View>
      );
    }
  }
  
  
  const styles = StyleSheet.create({
    text: {
       fontSize: 15,
       alignSelf: 'center',
       color: '#572D15'
    },
    textInput: {
      height: 40,
      borderColor: '#DAE3D9',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginBottom: 20
    },
    picker: {
      width: 290,
      backgroundColor: '#C7CEEA',
      borderColor: 'black',
      borderWidth: 1,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 16,
  
    },
    pickerItem: {
      color: 'red',
      backgroundColor: '#FFF0E0',
    },
    input: {
      // marginEnd: 10,
      alignItems : 'flex-end',
      height: 40,
      width: 290,
      marginLeft: 35,
      marginRight: 35,
      borderColor: '#8971D0',
      borderWidth: 1
    },
  })
  