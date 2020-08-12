import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { color } from '../../Assets/Styles';

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
    marginBottom: 10,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.fade
  },
  text: {
    color: color.default,
    fontSize: 12,
  },
  input: {
    alignContent: 'center',
    color: color.dark,
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5
  }
});
