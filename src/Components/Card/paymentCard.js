import React from 'react';
import { Image, Text, View } from 'react-native';
import style from './style';
import { color } from '../../Assets/Styles';

const PaymentCard = props => {
    const {name, brand, active} = props;
    return (
        <View style={style.paymentContainer}>
            <View style={style.paymentBrand}>
                <Image
                    style={style.brandImage}
                    source={brand} />
            </View>
            <Text style={style.brandText}>{name}</Text>
            <View style={{ ...style.brandIndicator, backgroundColor: active ? color.primary : 'transparent' }}></View>
        </View>
    )
}

export default PaymentCard;