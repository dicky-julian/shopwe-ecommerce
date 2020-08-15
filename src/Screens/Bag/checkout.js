import React, { useEffect, useState } from 'react';
import { Dimensions, Text, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Button, Card, PaymentCard, Topbar } from '../../Components';
import style from './style';
import store from './store';
import Axios from 'axios';
import { API_URL } from '../../../env';

import { fetchPayment } from '../../Redux/Actions/transactions/payments';
import { splitString } from '../../Utils/helper';
import { setOrder } from '../../Redux/Action/order';

const Checkout = props => {
  const navigation = useNavigation();
  const {detail_order,sub_total} = props.route.params;
  const [activePayment, setActivePayment] = useState(1);
  const [address, setAddress] = useState();
  const payment = props.payment;
  const user = props.user;
  const auth = props.auth;

  const [isLoading, setIsLoading] = useState(false)

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
  /**
    * API Services
    */
  const addOrder = () => {
    setIsLoading(true)
    const detailOrder = detail_order;
    detailOrder.map((d_o, i) => {
      delete detailOrder[i].image;
    })
    let order = {
      "user_id": user.id,
      "address": user.address,
      "payment_id": activePayment,
      "detail_order": detailOrder,
    }
    Axios({
      method: 'POST',
      url: `${API_URL}/orders`,
      headers: {
        Authorization: user.tokenLogin,
        'Content-Type': 'application/json'
      },
      data: order
    }).then((res) => {
      setIsLoading(false)
      props.setOrder([]);
      console.log(res, 'ini result')
      navigation.navigate('ShipStatus')
    }).catch((error) => {
      setIsLoading(false)
      console.log(error.response);
    });
  }
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
            <Text style={style.darkText}>{sub_total}$</Text>
          </View>
          <View style={style.textContainer}>
            <Text style={style.fadeText}>Delivery:</Text>
            <Text style={style.darkText}>15$</Text>
          </View>
          <View style={style.textContainer}>
            <Text style={style.fadeText}>Summary:</Text>
            <Text style={style.darkText}>{parseInt(sub_total)+15}$</Text>
          </View>
          {isLoading
            ? <Button
              title="Loading..."
              style="primary"
              type="fullwidth"
            />
            : <Button
              title="Submit Order"
              style="primary"
              type="fullwidth"
              onPress={() => addOrder()}
            />}
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  payment: state.transaction.payment,
  user: state.auth.auth,
  auth: state.auth.auth
});

const mapDispathToProps = { 
  fetchPayment,
  setOrder
 };

export default connect(mapStateToProps, mapDispathToProps)(Checkout);