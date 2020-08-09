import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {Headline3, Subheads} from '../../Components';

const MyOrder = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headline}>
        <Headline3 title="My Orders" />
      </View>

      <View style={styles.box}>
        <View style={styles.order}>
          <View style={styles.detail}>
            <Subheads title="Order No. " />
            <Subheads title="1947034" />
          </View>
          <Text style={styles.text}>10-08-2020 </Text>
        </View>

        <View style={styles.detail}>
          <Text style={styles.text}>Tracking Number: </Text>
          <Text> IW3446274627467</Text>
        </View>

        <View style={styles.detail}>
          <Text style={styles.text}> Quantity: </Text>
          <Text> 3</Text>
        </View>

        <View style={styles.detail}>
          <Text style={styles.text}> Total Amount: </Text>
          <Text> 122$</Text>
        </View>
        <Text style={styles.status}>Delivered</Text>
      </View>
    </View>
  );
};

export default MyOrder;
