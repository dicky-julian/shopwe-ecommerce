import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tags = (props) => {
  const content = (
    <View style={[styles.button, {backgroundColor: props.color}]}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

export default Tags;

const styles = StyleSheet.create({
  button: {
    width: 100,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    borderWidth: 0.4
  },
  title: {
    color: 'black',
    margin: 0,
    fontSize: 18,
    justifyContent: 'center',
  },
});
