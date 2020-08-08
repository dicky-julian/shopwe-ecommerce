import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Subheads = props => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default Subheads;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
  },
});
