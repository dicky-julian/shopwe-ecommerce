import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './style';
import {color} from '../../Assets/Styles';
import { apiUri } from '../../Utils/config';

const ProductOrder = (props) => {
  const [count, setCount] = useState(1);
  const dataOrderDetail = props.dataOrderDetail;

  const handleRemoveCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <View style={style.container}>
      <Image
        style={style.productImage}
        source={{ uri: `${apiUri.newImagePath}/${dataOrderDetail.image}`}}
      />
      <View style={style.cardProduct}>
        <View style={style.productWrapper}>
          <View>
            <Text style={style.productTitle}>{dataOrderDetail.brand_name}</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{...style.productWrapper, marginRight: 20}}>
                <Text style={style.fadeText}>Color: </Text>
                <Text style={style.darkText}>{dataOrderDetail.color}</Text>
              </View>
              <View style={style.productWrapper}>
                <Text style={style.fadeText}>Size: </Text>
                <Text style={style.darkText}>{dataOrderDetail.size}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Ionicons name="trash-outline" size={20} color={color.dark} />
          </TouchableOpacity>
        </View>
        <View style={style.productWrapper}>
          {props.counter ? (
            <View style={style.counterContainer}>
              <TouchableOpacity
                style={style.counterButton}
                onPress={() => handleRemoveCount()}>
                <Ionicons
                  name="remove-outline"
                  size={20}
                  color={color.default}
                />
              </TouchableOpacity>
              <Text style={style.counterText}>{count}</Text>
              <TouchableOpacity
                style={style.counterButton}
                onPress={() => setCount(count + 1)}>
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

export default ProductOrder;
