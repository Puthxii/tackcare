import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, StyleSheet, Picker, Text  } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import MButton from './components/MButton';
import DatePicker from 'react-native-datepicker';
 

var db = openDatabase({ name: 'tc_db.db' });

export default class EditBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book_id: '',
      book_ser: '',
      book_car: '',
      book_start: '',
      book_end: '',
      date: '',
    };
    const { navigation } = this.props;  
    const book_id = navigation.getParam('book_id'); 
    
    if( book_id!= null){
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM booked where book_id = ?',
          [book_id],
          (tx, results) => {
            var len = results.rows.length;
            console.log('len',len);
            if (len > 0) {
              // console.log(results.rows.item(0).user_contact);
              this.setState({
                book_id: results.rows.item(0).book_id
              });
              this.setState({
                book_ser:results.rows.item(0).book_ser,
              });
              this.setState({
                book_car:results.rows.item(0).book_car,
              });
              this.setState({
                book_start:results.rows.item(0).book_start,
              });
              this.setState({
                book_end:results.rows.item(0).book_end,
               });
               this.setState({
                date:results.rows.item(0).date,
               });
            }else{
              alert('No found');
              this.setState({
                book_ser: '',
                book_car: '',
                book_start: '',
                book_end: '',
                date: '',
              });
            }
          }
        );
      });
    }
  }

  updateUser = () => {
      var that=this;
      const { book_id } = this.state;
      const { book_ser } = this.state;
      const { book_car } = this.state;
      const { book_start } = this.state;
      const { book_end } = this.state;
      const { date } = this.state;
      if (book_ser){
        if (book_car){
          if (book_start){
            if (book_end){
              if (date){
                db.transaction((tx)=> {
                  tx.executeSql(
                    'UPDATE booked set book_ser=?, book_car=? , book_start=?, book_end=?, date=? where book_id=?',
                    [book_ser, book_car, book_start, book_end, date, book_id],
                    (tx, results) => {
                      console.log('Results',results.rowsAffected);
                      if(results.rowsAffected>0){
                        Alert.alert( 'Success', 'User updated successfully',
                          [
                            {text: 'Ok', onPress: () => that.props.navigation.navigate('HomeScreen')},
                          ],
                          { cancelable: false }
                        );
                      }else{
                        alert('Updation Failed');
                      }
                    }
                  );
                });
              } else {
                alert('Please fill date');
              }
            } else {
              alert('Please fill end point');
            }
          } else {
            alert('Please fill Start point');
          }
        } else {
          alert('Please select Car');
        }
      } else {
        alert('Please select Service');
      }
    };


    render() {
    
    return (
    
        <View style={{ backgroundColor: '#D7BDE2', flex: 1 }}>
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
              value={this.state.date}
              style={styles.input}
              date={this.state.date} //initial date from state
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
              
              onDateChange={(date) => {this.setState({date: date})}}
              />
              <MButton
                title="Edit Booking"
                customClick={this.updateUser.bind(this)}
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
  textStyle: {  
    fontSize: 23,  
    textAlign: 'center',  
    color: '#f00',  
},  
});
