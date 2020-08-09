import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Headline = props => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default Headline;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
  },
});
