import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style';
import {
  ShippingAddress,
  ButtonLarge,
  Headline,
  Subheads,
  ButtonCircle,
} from '../../Components';

const Checkout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subheads}>
        <Subheads title="Checkout" />
      </View>

      <View style={styles.shipaddress}>
        <ShippingAddress nameReceiver="Sinta" address="kota bogor" />
      </View>

      <View style={styles.subheads}>
        <Subheads title="Payment" />
      </View>

      <View style={styles.paymentCard}>
        <View style={styles.card}>
          <Image
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={styles.image}
          />
          <Text style={styles.itemName}> Name</Text>
          <ButtonCircle style={styles.itemButton} title=" " />
        </View>
      </View>
      <View style={styles.amountStyle}>
        <View style={styles.amountCard}>
          <Text style={[styles.amountItems, styles.text]}>Order</Text>
          <Headline style={styles.amountItems} title="122$" />
        </View>

        <View style={styles.amountCard}>
          <Text style={[styles.amountItems, styles.text]}>Delivery</Text>
          <Headline style={styles.amountItems} title="122$" />
        </View>
        <View style={styles.amountCard}>
          <Text style={[styles.amountItems, styles.text]}>Summary</Text>
          <Headline style={styles.amountItems} title="122$" />
        </View>
      </View>

      <ButtonLarge title="SUBMIT ORDER" />
    </View>
  );
};

export default Checkout;
