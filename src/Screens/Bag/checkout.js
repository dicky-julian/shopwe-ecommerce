import React, { useState } from 'react';
import { Dimensions, Text, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Card, PaymentCard, Topbar } from '../../Components';
import style from './style';
import store from './store';

const Checkout = props => {
  const navigation = useNavigation();
  const [activePayment, setActivePayment] = useState(1);

  return (
    <View>
      <Topbar backNav={true} title="Checkout" />
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ height: Dimensions.get('window').height - 285 }}>
          <ScrollView style={style.fullContainer}>
            <Text style={style.subTitleText}>Shipping Address</Text>
            <Card dataAddress={store.dataAddress[0]} onPress={() => navigation.navigate('ShipAddress')} />

            <Text style={style.subTitleText}>Payment</Text>
            {store.paymentData.map((payment, key) => {
              return (
                <PaymentCard
                  name={payment.name}
                  brand={payment.brandImage}
                  isActive={payment.id === activePayment ? true : false}
                  key={key}
                  onPress={() => setActivePayment(payment.id)}
                />
              )
            })}
            <View style={{ height: 220 }}></View>
          </ScrollView>
        </View>
        <View style={{ ...style.bottomBar, height: 200, bottom: 0 }}>
          <View style={style.textContainer}>
            <Text style={style.fadeText}>Order:</Text>
            <Text style={style.darkText}>112$</Text>
          </View>
          <View style={style.textContainer}>
            <Text style={style.fadeText}>Delivery:</Text>
            <Text style={style.darkText}>15$</Text>
          </View>
          <View style={style.textContainer}>
            <Text style={style.fadeText}>Summary:</Text>
            <Text style={style.darkText}>127$</Text>
          </View>
          <Button
            title="Submit Order"
            style="primary"
            type="fullwidth"
            onPress={() => navigation.navigate('ShipStatus')}
          />
        </View>
      </View>
    </View>
  );
}

export default Checkout;