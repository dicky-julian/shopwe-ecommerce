import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HelperText = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default HelperText;

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    lineHeight: 11,
    color: '#9B9B9B',
  },
});
