import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Headline3 = props => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default Headline3;

const styles = StyleSheet.create({
  text: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
  },
});
