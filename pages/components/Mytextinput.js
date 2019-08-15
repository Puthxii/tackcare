/*Custom TextInput*/
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
const Mytextinput = props => {
  return (
    <View
      style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        // borderColor: '#007FFF',
        borderWidth: 1,
        height: 40,
        borderColor: '#8971D0',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 20
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#8971D0"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};
export default Mytextinput;

