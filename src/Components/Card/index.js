import React, { useState } from 'react';
import { Text, TouchableOpacity, View, DatePickerIOS } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import { color } from '../../Assets/Styles';
import moment from 'moment';

const Card = props => {
  const navigation = useNavigation();
  const dataAddress = props.dataAddress;
  const dataOrder = props.dataOrder;
  
  // DEFINE PART OF ADDRESS
  const [label, fullname, address, city, state, country, zip] = dataAddress || [];
  const date = dataOrder?moment(dataOrder.updated_at):'';
  return (
    <View>
      {dataAddress ? (
        <View
          style={{
            ...style.container,
            borderColor: props.isActive ? color.primary : color.fade,
          }}>
          <TouchableOpacity style={style.dataContainer} onPress={props.onPress}>
            <Text style={{ ...style.mediumText, fontWeight: '700' }}>{fullname}</Text>
            <Text style={{...style.mediumText}}>{`${address}, ${city}, ${state}, ${country}, ${zip}`}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Address', { data: [...dataAddress, props.indexCard] })}>
            <Text style={{ ...style.mediumText, color: color.primary }}>Change</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={style.container} onPress={props.onPress}>
          <View style={style.box}>
            <View style={style.order}>
              <View style={style.detail}>
                <Text style={style.fadeText}>Order No. </Text>
                <Text style={style.fadeText}>{dataOrder.order_id}</Text>
              </View>
              <Text style={style.text}>{date.format('MM-DD-YYYY')}</Text>
            </View>

            <View style={style.detail}>
              <Text style={style.text}>Tracking Number: </Text>
              <Text>{dataOrder.tracking_number}</Text>
            </View>

            <View style={style.detail}>
              <Text style={style.text}>Quantity: </Text>
              <Text>{dataOrder.quantity}</Text>
            </View>

            <View style={style.detail}>
              <Text style={style.text}>Total Amount: </Text>
              <Text>{dataOrder.total}</Text>
            </View>
            <Text style={style.status}>Delivered</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Card;