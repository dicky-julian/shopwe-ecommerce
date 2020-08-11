import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import { color } from '../../Assets/Styles';

const Card = props => {
  const navigation = useNavigation();
  const dataAddress = props.dataAddress;
  const dataOrder = props.dataOrder;

  // DEFINE PART OF ADDRESS
  let newAddress;
  if (dataAddress) newAddress = dataAddress.address.split('|');
  const [address, city, province, country, zip_code] = newAddress || [];
  return (
    <View>
      {dataAddress ? (
        <View style={{ ...style.container, borderColor: props.isActive ? color.primary : color.fade }}>
          <TouchableOpacity style={style.dataContainer} onPress={props.onPress}>
            <Text style={{ ...style.mediumText, fontWeight: '700' }}>{dataAddress.name}</Text>
            <Text style={style.mediumText}>{`${address}, ${city}, ${province}, ${country}, ${zip_code}`}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Address', { data: dataAddress })}>
            <Text style={{ ...style.mediumText, color: color.primary }}>Change</Text>
          </TouchableOpacity>
        </View>
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