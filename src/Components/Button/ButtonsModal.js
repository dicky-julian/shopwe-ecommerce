import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonsModal = props => {
  const content = (
    <View style={[styles.button, {backgroundColor: '#fff'}]}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

export default ButtonsModal;

const styles = StyleSheet.create({
  button: {
    width: 140,
    borderRadius: 5,
    padding: 10,
    // alignItems: 'center',
  },
  title: {
    color: 'black',
    margin: 0,
    fontSize: 18,
    textAlign: 'left',
  },
});
