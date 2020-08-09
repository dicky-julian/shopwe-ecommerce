import React from 'react';
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonLarge = props => {
  const content = (
    <View style={[styles.button, { backgroundColor: '#DB3022' }]}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

export default ButtonLarge;

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width - 20,
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    margin: 0,
    fontSize: 18,
    justifyContent: 'center',
  },
});
