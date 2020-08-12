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

const OrderDetail = (props) => {
  const navigation = useNavigation();
  const [detailOrder, setDetailOrder] = useState([])
  const {
    order_id,
    tracking_number,
    updated_at,
    address,
    name,
    total,
    quantity,
  } = props.route.params;

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
        url: `http://192.168.1.2:3000/shopwe/api/v1/users/3/orders/${order_id}`,
        headers: {
          // Authorization: result,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          console.log(res, 'res');
          setDetailOrder(res.data.data)
          // props.get_id_order(res);
          // props.get_all_order(res);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  handleReorder= () => {
    
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
                  return <ProductOrder dataOrderDetail={dataDetail} />;
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
            <Button title="Reorder" onPress={()=>Alert.alert('hi')} />
            <Button title="Leave Feedback" style="primary" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  // auth: state.auth,
  order: state.order,
});

const mapDispatchProps = {get_all_order, get_id_order};

export default connect(mapStateToProps, mapDispatchProps)(OrderDetail);
