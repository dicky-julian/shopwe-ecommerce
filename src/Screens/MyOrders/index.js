import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './style';
import { Topbar, Card } from '../../Components';

const MyOrder = props => {
   const dataOrder = {
     orderNumber: '13131313',
     dateOrder: '12-12-2020',
     trackNumber: 'WE1317361736',
     qty: '2',
     totalAmount: '1222$',
   };
  return (
    <View>
      <Topbar backNav={true} search={true} />
      <ScrollView>
        <View style={styles.cardOrder}>
          <View style={styles.headline}>
            <Text style={styles.headText}>My Orders </Text>
          </View>
          <View style={styles.box}>
            <Card dataOrder={dataOrder} />
            <Card dataOrder={dataOrder} />
            <Card dataOrder={dataOrder} />
            <Card dataOrder={dataOrder} />
            <Card dataOrder={dataOrder} />
            <Card dataOrder={dataOrder} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyOrder;
