import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const TextInputs = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        value={props.value}
        ref={props.ref}
      />
    </View>
  );
};

export default TextInputs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  text: {
    marginLeft: 10,
    marginTop: 10,
    color: '#9B9B9B',
    fontSize: 11,
  },
  input: {
    borderColor: 'gray',
    alignContent: 'center',
    marginLeft: 10,
    // marginBottom: 10,
  },
});
