import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Headline2 = props => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default Headline2;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 'bold',
  },
});
