import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../../Assets/Styles';

const Rating = () => {
  return (
      <View style={styles.ratingContainer}>
        <Ionicons
          style={styles.rating}
          name="star"
          size={15}
          color={color.gold}
        />
        <Ionicons
          style={styles.rating}
          name="star"
          size={15}
          color={color.gold}
        />
        <Ionicons
          style={styles.rating}
          name="star"
          size={15}
          color={color.gold}
        />
        <Ionicons
          style={styles.rating}
          name="star-outline"
          size={15}
          color={color.gold}
        />
        <Ionicons
          style={styles.rating}
          name="star-outline"
          size={15}
          color={color.gold}
        />
      </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
  },
  rating: {
    marginTop: 10,
    marginBottom: 3,
    marginRight: 2,
  },
});
