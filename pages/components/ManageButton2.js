/*Custom Button*/
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const ManageButton2 = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    button: {
    // alignItems: 'center',
    backgroundColor: '#ed1250',
    color: '#ffffff',
    padding: 10,
    marginTop: 10,
    borderRadius : 10
    // marginLeft: 35,
    // marginRight: 35,
  },
  text: {
    color: '#ffffff',
  }
});
export default ManageButton2;
