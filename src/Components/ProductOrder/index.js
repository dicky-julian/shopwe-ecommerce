import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './style';
import { color } from '../../Assets/Styles';
import { apiUri } from '../../Utils/config';
import { connect } from 'react-redux';
import { setOrder } from '../../Redux/Action/order';

const ProductOrder = (props) => {
  const [count, setCount] = useState(1);
  const dataOrderDetail = props.dataOrderDetail;
  const [price, setPrice] = useState(props.dataOrderDetail.price)

  const handleRemoveCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const plusOrder = (orderData) => {
    let orders = props.order.orders;
    let getIndex;
    orders.map((order, index) => {
      if (order.product_id === orderData.product_id && order.size === orderData.size && order.color === orderData.color) {
        getIndex = index;
      }
    })
    orders[getIndex].quantity += 1;
    orders[getIndex].sub_total += price;
    props.setOrder(orders);
  }

  const minusOrder = (orderData) => {
    let orders = props.order.orders;
    let getIndex;
    orders.map((order, index) => {
      if (order.product_id === orderData.product_id && order.size === orderData.size && order.color === orderData.color) {
        getIndex = index;
      }
    })
    orders[getIndex].quantity -= 1;
    orders[getIndex].sub_total -= price;
    props.setOrder(orders);
  }

  const deleteOrder = (orderData) => {
    let orders = props.order.orders;
    let getIndex;
    orders.map((order, index) => {
      if (order.product_id === orderData.product_id && order.size === orderData.size && order.color === orderData.color) {
        getIndex = index;
      }
    })
    orders.splice(getIndex, 1);
    props.setOrder(orders);
  }
  return (
    <View style={style.container}>
      <Image
        style={style.productImage}
        source={{ uri: `${apiUri.newImagePath}/${dataOrderDetail.image}` }}
      />
      <View style={style.cardProduct}>
        <View style={style.productWrapper}>
          <View>
            <Text style={style.productTitle}>{dataOrderDetail.brand_name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ ...style.productWrapper, marginRight: 20 }}>
                <Text style={style.fadeText}>Color: </Text>
                <Text style={{ ...style.darkText, ...style.productColor, backgroundColor: `${dataOrderDetail.color}`}}></Text>
              </View>
              <View style={style.productWrapper}>
                <Text style={style.fadeText}>Size: </Text>
                <Text style={style.darkText}>{dataOrderDetail.size}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => deleteOrder(dataOrderDetail)}>
            <Ionicons name="trash-outline" size={20} color={color.dark} />
          </TouchableOpacity>
        </View>
        <View style={style.productWrapper}>
          {props.counter ? (
            <View style={style.counterContainer}>
              {dataOrderDetail.quantity < 2
                ? <TouchableOpacity
                  style={style.counterButton}>
                  {/* onPress={() => handleRemoveCount()}> */}
                  <Ionicons
                    name="remove-outline"
                    size={20}
                    color={color.default}
                  />
                </TouchableOpacity>
                : <TouchableOpacity
                  style={style.counterButton}
                  onPress={() => minusOrder(dataOrderDetail)}>
                  {/* onPress={() => handleRemoveCount()}> */}
                  <Ionicons
                    name="remove-outline"
                    size={20}
                    color={color.default}
                  />
                </TouchableOpacity>}
              <Text style={style.counterText}>{dataOrderDetail.quantity}</Text>
              <TouchableOpacity
                style={style.counterButton}
                onPress={() => plusOrder(dataOrderDetail)}>
                {/* onPress={() => setCount(count + 1)}> */}
                <Ionicons name="add-outline" size={20} color={color.default} />
              </TouchableOpacity>
            </View>
          ) : (
              <View style={style.counterContainer}>
                <Text style={style.darkText}>
                  Units: {dataOrderDetail.quantity}
                </Text>
              </View>
            )}
          <Text style={style.counterText}>{dataOrderDetail.sub_total}$</Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  order: state.order
})

const mapDispatchToProps = {
  setOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductOrder);
