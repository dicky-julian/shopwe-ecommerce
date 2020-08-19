import React, { useState, useEffect } from 'react';
import {Dimensions, Text, ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, ProductOrder, Topbar} from '../../Components';
import style from './style';
import { connect } from 'react-redux';

const Bag = (props) => {
  const navigation = useNavigation();
  const [subTotal, setSubTotal] = useState(0)
  const {orders} = props.order;
  useEffect(() => {
    sumSubTotal();
  }, [props.order])

  const sumSubTotal = () => {
    const orders = props.order.orders;
    let subtotal = 0;
    orders.map(order => subtotal += order.sub_total)
    setSubTotal(subtotal)
  }
  function checkout() {
    const user = props.auth.auth;
    user.tokenLogin
      ? navigation.navigate('Checkout', { detail_order: props.order.orders, sub_total: subTotal })
      : navigation.navigate('Auth', { form: 'signup' })
  }
  return (
    <View style={{ position: 'relative', flex: 1 }}>
      <Topbar search={false} />
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1}}>
        {/* <View style={{height: Dimensions.get('window').height - 260}}> */}
          <ScrollView style={style.container}>
            <Text style={style.titleText}>My Bag</Text>
            {orders
              ? orders.length > 0 
                ? orders.map((order, index) => {
                  return (
                    <ProductOrder key={index} counter={true} dataOrderDetail={order}/>
                   )
                })
                : <Text>No item was added.</Text>
              : <Text>No item was added.</Text>
            }
            <View style={{height: 150}}></View>
          </ScrollView>
        </View>
      </View>
      {orders
        ? orders.length > 0
          ? <View style={{ ...style.bottomBar, height: 125, bottom: 0 }}>
            <View style={style.textContainer}>
              <Text style={style.fadeText}>Total amount:</Text>
              <Text style={style.darkText}>{subTotal}$</Text>
            </View>
            <Button
              title="Checkout"
              style="primary"
              type="fullwidth"
              onPress={() => checkout()}
            />
          </View>
          : <></>
        : <></>}
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Bag);
