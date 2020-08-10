import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './style';
import {Topbar} from '../../Components';

const MyOrder = () => {
  return (
    <View>
      <Topbar backNav={true} search={true} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headline}>
            <Text style={styles.headText}>My Orders </Text>
          </View>

          <View style={styles.box}>
            <View style={styles.order}>
              <View style={styles.detail}>
                <Text style={styles.fadeText}>Order No. </Text>
                <Text style={styles.fadeText}>1947034 </Text>
              </View>
              <Text style={styles.text}>10-08-2020 </Text>
            </View>

            <View style={styles.detail}>
              <Text style={styles.text}>Tracking Number: </Text>
              <Text> IW3446274627467</Text>
            </View>

            <View style={styles.detail}>
              <Text style={styles.text}>Quantity: </Text>
              <Text> 3</Text>
            </View>

            <View style={styles.detail}>
              <Text style={styles.text}>Total Amount: </Text>
              <Text> 122$</Text>
            </View>
            <Text style={styles.status}>Delivered</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyOrder;
