import React, { useEffect, useState } from 'react';
import { Dimensions, Text, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Button, Card, PaymentCard, Topbar } from '../../Components';
import style from './style';
import store from './store';

import { fetchPayment } from '../../Redux/Actions/transactions/payments';
import { splitString } from '../../Utils/helper';

const Checkout = props => {
  const navigation = useNavigation();
  const [activePayment, setActivePayment] = useState(1);
  const [address, setAddress] = useState();
  const payment = props.payment;
  const user = props.user;

  useEffect(() => {
    if (!payment) {
      props.fetchPayment();
    }

    if (!address) {
      if (user.address) {
        let userAddress = splitString(user.address);
        userAddress = userAddress[user.address_active];
        setAddress(userAddress);
      }
    }
  })

  return (
    <View>
      <Topbar backNav={true} title="Checkout" />
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ height: Dimensions.get('window').height - 285 }}>
          <ScrollView style={style.fullContainer}>
            <Text style={style.subTitleText}>Shipping Address</Text>
            {address ?
              <Card dataAddress={address} indexCard={user.address_active} onPress={() => navigation.navigate('ShipAddress')} />
              :
              <></>
            }
            <Text style={style.subTitleText}>Payment</Text>
            {/* {store.paymentData.map((payment, key) => {
              return (
                <PaymentCard
                  name={payment.name}
                  brand={payment.brandImage}
                  isActive={payment.id === activePayment ? true : false}
                  key={key}
                  onPress={() => setActivePayment(payment.id)}
                />
              )
            })} */}
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

const mapStateToProps = state => ({
  payment: state.transaction.payment,
  user: state.auth.auth
});

const mapDispathToProps = { fetchPayment };

export default connect(mapStateToProps, mapDispathToProps)(Checkout);