import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DescText = props => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default DescText;

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        // lineHeight: '150%',
    }
});
