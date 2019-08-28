  /*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, StyleSheet, Picker, Text  } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import MButton from './components/MButton';

var db = openDatabase({ name: 'tc_db.db' });
export default class Call extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book_ser: '',
      book_car: '',
      book_start: '',
      book_end: '',
      date: '',
    };
  }


  state = {department: ''}
  updateDepartment = (department) => {
     this.setState({ department: department })
  }

  register_user = () => { 
    var that = this;
    const { book_ser } = this.state;
    const { book_car } = this.state;
    const { book_start } = this.state;
    const { book_end } = this.state;
    // alert(date);
    if (book_ser) {
      if (book_car) {
        if (book_start) {
          if (book_end) {
            db.transaction(function(tx) {
              tx.executeSql(
                'INSERT INTO book (book_ser, book_car, book_start, book_end) VALUES (?,?,?,?)',
                [book_ser, book_car, book_start, book_end],
                (tx, results) => {
                  console.log('Results', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    Alert.alert(
                      'Success',
                      'You are Calling Successfully, Plese wait 15 min',
                      [
                        {
                          text: 'Ok',
                          onPress: () =>
                            that.props.navigation.navigate('HomeScreen'),
                        },
                      ],
                      { cancelable: false }
                    );
                  } else {
                    alert('Call Failed');
                  }
                }
              );
            });
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
              // keyboardType="numeric"
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
            <MButton
              title="Call"
              customClick={this.register_user.bind(this)}
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
    borderRadius : 10

  },
  pickerItem: {
    color: 'red',
    backgroundColor: '#FFF0E0',
  },
})
