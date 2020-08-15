import React, {useEffect, useState} from 'react';
import {Image, Text, ScrollView, View, Alert} from 'react-native';
import {Button, ProductOrder, Topbar} from '../../Components';
import style from './style';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {get_all_order, get_id_order} from '../../Redux/Action/order';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import moment from 'moment';
import { API_URL } from '../../../env';

const OrderDetail = (props) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false)
  const [detailOrder, setDetailOrder] = useState([])
  const {
    order_id,
    tracking_number,
    updated_at,
    address,
    name,
    total,
    payment_id,
  } = props.route.params;
  const {
    tokenLogin,
    id,
  } = props.auth.auth;
  let detail_order = [];
  
  let order = {
    "user_id": id,
    "address": address,
    "payment_id": payment_id,
    "detail_order": detail_order,
    "tracking_number": tracking_number
  }
  

  const Date = moment(updated_at).format('MM-DD-YYYY');

  let addressSplit = '';
  address.split('-').map(address => {
    const firstWord = address.charAt(0).toUpperCase();
    const word = address.substring(1, address.length);
    addressSplit += firstWord+word+', ';
  })
  useEffect(() => {
    AsyncStorage.getItem('token', (error, result) => {
      axios({
        method: 'GET',
        url: `${API_URL}/users/${id}/orders/${order_id}`,
        headers: {
          Authorization: tokenLogin,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          setDetailOrder(res.data.data)
          // props.get_id_order(res);
          // props.get_all_order(res);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  /**
   * API Services
   */
  const addOrder = () => {
    setIsLoading(true)
    axios({
      method: 'POST',
      url: `${API_URL}/orders`,
      headers: {
        Authorization: tokenLogin,
        'Content-Type': 'application/json'
      },
      data: order
    })
      .then((res) => {
        setIsLoading(false)
        Alert.alert(
          "Reorder Success!",
          "Reorder again?",
          [{text: "No, Thanks", onPress: () => console.log("Cancel Pressed"), style: "cancel"},
            { text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
        console.log(res, 'ini result')
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error.response);
      });
  }

  /**
   * Logics
   */
  const addDetailOrder = (data) => {
    detail_order.push({
      "product_id": data.product_id,
      "size": data.size,
      "color": data.color,
      "price": data.price,
      "quantity": data.quantity,
      "subtotal": data.sub_total
    });
  }
  return (
    <View>
      <Topbar backNav={true} search={true} title="Order Details" />
      <ScrollView style={style.fullContainer}>
        <View>
          {/* TRANSACTION DETAIL */}
          <View>
            <View style={style.detailContainer}>
              <View>
                <Text style={style.titleText}>Order No {order_id}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    marginBottom: 5,
                  }}>
                  <Text style={style.fadeText}>Tracking Number: </Text>
                  <Text style={style.darkText}>{tracking_number}</Text>
                </View>
                <Text style={style.darkText}>{detailOrder.length} Items</Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={style.fadeText}>
                  {/* {Date.format('MM-DD-YYYY')} */}
                  {Date}
                </Text>
                <Text style={style.successText}>Delivered</Text>
              </View>
            </View>
            {detailOrder ? (
              detailOrder.length > 0 ? (
                detailOrder.map((dataDetail, index) => {
                  addDetailOrder(dataDetail);
                  return <ProductOrder key={index} dataOrderDetail={dataDetail} />;
                })
              ) : (
                <Text>No Data</Text>
              )
            ) : (
              <Text>No Data</Text>
            )}
            {/* ORDER DETAIL */}
            <Text style={{...style.titleText, marginTop: 20}}>
              Order Information
            </Text>
            <View style={style.textContainer}>
              <Text style={{...style.fadeText, width: '35%'}}>
                Shipping Address
              </Text>
              <Text style={{...style.darkText, width: '65%'}}>
                {addressSplit}
              </Text>
            </View>
            {/* <View style={style.textContainer}>
              <Text style={{...style.fadeText, width: '35%'}}>
                Payment Method
              </Text>
              <View style={style.paymentContainer}>
                <Image
                  source={require('../../Assets/Images/Payment/mastercard.png')}
                  style={style.paymentImage}
                />
                <Text style={{...style.darkText, width: '65%'}}>
                  *** *** *** 6543
                </Text>
              </View>
            </View> */}
            <View style={style.textContainer}>
              <Text style={{...style.fadeText, width: '35%'}}>
                Payment Method
              </Text>
              <Text style={{...style.darkText, width: '65%'}}>{name}</Text>
            </View>
            {/* <View style={style.textContainer}>
                <Text style={{...style.fadeText, width: '35%'}}>Discount</Text>
                <Text style={{...style.darkText, width: '65%'}}>
                  10%, Personal promo code
                </Text>
              </View> */}
            <View style={style.textContainer}>
              <Text style={{...style.fadeText, width: '35%'}}>
                Total Amount
              </Text>
              <Text style={{...style.darkText, width: '65%'}}>{total}</Text>
            </View>
          </View>
          <View
            style={{
              ...style.detailContainer,
              marginTop: 30,
              marginBottom: 35,
            }}>
            <View style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {isLoading 
                ? <Button title="Loading..." onPress={() => console.log('')} />
                : <Button title="Reorder" onPress={() => addOrder()} />
              }
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order,
});

const mapDispatchProps = {get_all_order, get_id_order};

export default connect(mapStateToProps, mapDispatchProps)(OrderDetail);
