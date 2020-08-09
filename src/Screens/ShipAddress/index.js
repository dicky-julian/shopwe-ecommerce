import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {ShippingAddress, Subheads} from '../../Components';

const ShipAddress = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subheads}>
        <Subheads title="Shipping Address" />
      </View>

      <View style={styles.box}>
        <ShippingAddress nameReceiver="Sinta" address="kota bogor" />
      </View>
    </View>
  );
};

export default ShipAddress;
