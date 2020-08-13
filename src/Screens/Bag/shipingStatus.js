import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../Components';
import style from './style';

const ShipingStatus = props => {
    const navigation = useNavigation();
    return (
        <View style={
            {
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Image
                style={style.statusImage}
                source={require('../../Assets/Images/Payment/bags.png')} />
            <Text style={style.titleText}>Success!</Text>
            <Text style={{ ...style.darkText, width: 300, textAlign: 'center', marginBottom: 75 }}>
                Your order will be delivered soon, Thank you fir choosing our app!
            </Text>
            <Button title='Continue Shoping' style='primary' type='fullwidth' onPress={() => navigation.replace('Index')} />
        </View>
    )
}

export default ShipingStatus;