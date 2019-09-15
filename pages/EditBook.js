import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, StyleSheet, Picker, Text  } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import MButton from './components/MButton';
import DatePicker from 'react-native-datepicker';
 
export default class EditBook extends React.Component {
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
  componentWillMount(){
    this.setState({ 
      book_id : this.props.navigation.state.params.book_id,
      book_ser: this.props.navigation.state.params.book_ser,
      book_start: this.props.navigation.state.params.book_start,
      book_end: this.props.navigation.state.params.book_end,
      price: this.props.navigation.state.params.price,
      stat: this.props.navigation.state.params.stat,
      star: this.props.navigation.state.params.star,
      cus_id: this.props.navigation.state.params.cus_id,
      book_date: this.props.navigation.state.params.book_date,
    })
  }

  UpdateBooked = () =>{
      
    fetch('http://172.16.28.148/takecare/Update.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      book_id : this.state.book_id,
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
          // Showing response message coming from server updating records.
          Alert.alert(responseJson);
        }).catch((error) => {
          console.error(error);
        });
  }


    render() {
    
    return (
    
        <View style={{ backgroundColor: '#E4E9EC', flex: 1 }}>
          <Text style={styles.textStyle}>book id: {this.state.book_id}</Text>
          <ScrollView keyboardShouldPersistTaps="handled">
            <Picker  value={this.state.book_ser} style={[styles.picker]} itemStyle={styles.pickerItem} selectedValue = {this.state.department} onValueChange = {book_ser => this.setState({ book_ser })}>
               <Picker.Item label = "Select Service" value = "" />
               <Picker.Item label = "Car" value = "Car" />
               <Picker.Item label = "Car and Care" value = "Car And Tak Care" />
               {/* <Picker.Item label = "Civil" value = "Civil" />
               <Picker.Item label = "Chemical" value = "Chemical" />
               <Picker.Item label = "Material" value = "Material" />
               <Picker.Item label = "Environment" value = "Environment" /> */}
            </Picker>
            <Text style = {styles.text}>{this.state.book_ser}</Text>

            <Picker value={this.state.book_car}  style={[styles.picker]} itemStyle={styles.pickerItem} selectedValue = {this.state.department} onValueChange = {book_car => this.setState({ book_car })}>
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

            <Mytextinput 
              value={this.state.book_start}
              placeholder="Start point"
              // onChangeText={book_start => this.setState({ book_start })}
              style={{ padding:10 }}
            />
            <Mytextinput
              value={this.state.book_end}
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
                title="Edit Booking"
                customClick={this.UpdateBooked.bind(this)}
              />
          </ScrollView>
      </View>
      
    );
     
    }
  }



const styles = StyleSheet.create({
  text: {
     fontSize: 15,
     alignSelf: 'center',
     color: '#424147'
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
  textStyle: {  
    fontSize: 23,  
    textAlign: 'center',  
    color: '#f00',  
},  
});
