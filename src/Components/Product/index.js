import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './style';
import { color } from '../../Assets/Styles';

const Product = (props) => {
    const { brand, name, rating, price } = props.data;
    return (
        <TouchableOpacity style={style.container} onPress={props.onPress}>
            <ImageBackground
                style={style.productImage}
                source={require('../../Assets/Images/Home/product.png')}
                resizeMode='cover'
                imageStyle={{ borderRadius: 5 }}>
                <View style={{ ...style.productLabel, backgroundColor: props.label === 'disc' ? color.primary : color.dark }}>
                    <Text style={style.labelText}>{props.labelName}</Text>
                </View>
            </ImageBackground>
            <View style={style.ratingContainer}>
                <Ionicons style={style.rating} name='star' size={15} color={color.gold} />
                <Ionicons style={style.rating} name='star' size={15} color={color.gold} />
                <Ionicons style={style.rating} name='star' size={15} color={color.gold} />
                <Ionicons style={style.rating} name='star-outline' size={15} color={color.gold} />
                <Ionicons style={style.rating} name='star-outline' size={15} color={color.gold} />
            </View>
            <Text style={style.brandText}>{brand}</Text>
            <Text style={style.nameText}>{name}</Text>
            <Text style={style.priceText}>{price}</Text>
        </TouchableOpacity>
    )
}

export default Product;