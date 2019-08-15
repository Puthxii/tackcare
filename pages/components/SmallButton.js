/*Custom Button*/
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const SmallButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    // justifyContent: 'flex-start',
    backgroundColor: '#95E8D7',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    // marginLeft: 35,
    // marginRight: 35,
    width: 75, height: 75,
    borderRadius : 16
  },
  text: {
    color: '#8971D0',
  },
});
export default SmallButton;