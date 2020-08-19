import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import style from './style';
import { color } from '../../Assets/Styles';

const PaymentCard = props => {
    const { name, brand, isActive, onPress } = props;
    return (
        <TouchableOpacity style={style.paymentContainer} onPress={onPress}>
            <View style={style.paymentBrand}>
                <Image
                    style={style.brandImage}
                    source={brand} />
            </View>
            <Text style={style.brandText}>{name}</Text>
            <View style={style.brandIndicator}>
                <View style={{ ...style.dotIndicator, backgroundColor: isActive ? color.primary : 'transparent' }}></View>
            </View>
        </TouchableOpacity>
    )
}

export default PaymentCard;