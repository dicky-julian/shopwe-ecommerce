import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ButtonCircle = (props) => {
  const content = (
    <View style={[styles.button, {backgroundColor: props.color}]}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

export default ButtonCircle;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  title: {
    color: 'black',
    margin: 0,
    fontSize: 18,
    justifyContent: 'center',
  },
});
