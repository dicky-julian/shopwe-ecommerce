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
    fontSize: 14,
    lineHeight: 18,
    color: '#9B9B9B',
  },
});
