import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { RenderRating } from './action';
import style from './style';
import { color } from '../../Assets/Styles';
import { apiUri } from '../../Utils/config';

const Product = (props) => {
  const { brand_name, name, rating, price, image } = props.data;
  const width = props.width;

  return (
    <TouchableOpacity style={{ ...style.container, width: width ? width : 150 }} onPress={props.onPress}>
      <ImageBackground
        style={style.productImage}
        source={{ uri: `${apiUri.newImagePath}/${image}` }}
        // source={require('../../Assets/Images/Home/product.png')}
        resizeMode='cover'
        imageStyle={{ borderRadius: 5 }}>
        {props.label
          && <View style={{ ...style.productLabel, backgroundColor: props.label === 'disc' ? color.primary : color.dark }}>
              <Text style={style.labelText}>{props.labelName}</Text>
             </View>}
      </ImageBackground>
      <View style={style.ratingContainer}>
        <RenderRating rating={rating} />
      </View>
      <Text style={style.brandText}>{brand_name}</Text>
      <Text style={style.nameText}>{name}</Text>
      <Text style={style.priceText}>${price}</Text>
    </TouchableOpacity>
  )
}

export default Product;