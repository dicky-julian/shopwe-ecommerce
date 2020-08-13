import React, { useState, useEffect } from 'react';
import {Dimensions, Text, ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, ProductOrder, Topbar} from '../../Components';
import style from './style';
import { connect } from 'react-redux';

const Bag = (props) => {
  const navigation = useNavigation();
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    sumSubTotal();
  }, [props.order])

  const sumSubTotal = () => {
    const orders = props.order.orders;
    let subtotal = 0;
    orders.map(order => subtotal += order.sub_total)
    setSubTotal(subtotal)
  }
  return (
    <View>
      <Topbar search={true} />
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{height: Dimensions.get('window').height - 260}}>
          <ScrollView style={style.container}>
            <Text style={style.titleText}>My Bag</Text>
            {props.order.orders
              ? props.order.orders.length > 0 
                ? props.order.orders.map((order, index) => {
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
        <View style={{...style.bottomBar, height: 125, bottom: 0}}>
          <View style={style.textContainer}>
            <Text style={style.fadeText}>Total amount:</Text>
            <Text style={style.darkText}>{subTotal}$</Text>
          </View>
          <Button
            title="Checkout"
            style="primary"
            type="fullwidth"
            onPress={() => navigation.navigate('Checkout', {detail_order: props.order.orders, sub_total: subTotal})}
          />
        </View>
      </View>
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
