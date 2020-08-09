import React from 'react';
import {Text, View, Alert} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import styles from './style';

const ShippingAddress = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.detail}>
          <Text style={[styles.item, {fontWeight: 'bold'}]}>
            {props.nameReceiver}
          </Text>
          <TouchableHighlight>
            <Text
              style={[styles.item, styles.buttons]}
              onPress={() => Alert.alert('hi')}>
              Change
            </Text>
          </TouchableHighlight>
        </View>

        <Text style={styles.addressCard}>{props.address}</Text>
      </View>
    </View>
  );
};

export default ShippingAddress;
