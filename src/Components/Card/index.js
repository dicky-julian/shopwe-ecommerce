import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './style';
import { color } from '../../Assets/Styles';

const Card = props => {
    const [borderCard, setBorderCard] = useState(0);
    const dataAddress = props.dataAddress;
    const dataOrder = props.dataOrder;
    return (
      <View>
        {dataAddress ? (
          <TouchableOpacity
            style={{
              ...style.container,
              borderColor: borderCard ? color.primary : color.fade,
            }}
            onPress={() => setBorderCard(props.selecting ? !borderCard : 0)}>
            <View style={style.dataContainer}>
              <Text style={{...style.mediumText, fontWeight: '700'}}>
                {dataAddress.name}
              </Text>
              <Text style={style.mediumText}>{dataAddress.address}</Text>
            </View>
            <TouchableOpacity onPress={props.onPress}>
              <Text style={{...style.mediumText, color: color.primary}}>
                Change
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={style.container}>
            <View style={style.box}>
              <View style={style.order}>
                <View style={style.detail}>
                  <Text style={style.fadeText}>Order No. </Text>
                  <Text style={style.fadeText}>{dataOrder.orderNumber}</Text>
                </View>
                <Text style={style.text}>{dataOrder.dateOrder}</Text>
              </View>

              <View style={style.detail}>
                <Text style={style.text}>Tracking Number: </Text>
                <Text>{dataOrder.trackNumber}</Text>
              </View>

              <View style={style.detail}>
                <Text style={style.text}>Quantity: </Text>
                <Text>{dataOrder.qty}</Text>
              </View>

              <View style={style.detail}>
                <Text style={style.text}>Total Amount: </Text>
                <Text>{dataOrder.totalAmount}</Text>
              </View>
              <Text style={style.status}>Delivered</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
}

export default Card;