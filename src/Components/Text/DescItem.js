import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DescItem = props => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default DescItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
  },
});
