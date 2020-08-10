import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import { color } from '../../Assets/Styles';

const Card = props => {
    const navigation = useNavigation();
    const dataAddress = props.dataAddress;
    const newAddress = dataAddress.address.split('|');
    const [address, city, province, country, zip_code] = newAddress;
    return (
        <View>
            {dataAddress ?
                <View style={{ ...style.container, borderColor: props.isActive ? color.primary : color.fade }}>
                    <TouchableOpacity style={style.dataContainer} onPress={props.onPress}>
                        <Text style={{ ...style.mediumText, fontWeight: '700' }}>{dataAddress.name}</Text>
                        <Text style={style.mediumText}>{`${address}, ${city}, ${province}, ${country}, ${zip_code}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Address', { data: dataAddress })}>
                        <Text style={{ ...style.mediumText, color: color.primary }}>Change</Text>
                    </TouchableOpacity>
                </View>
                :
                <TouchableOpacity style={style.container}>

                </TouchableOpacity>
            }
        </View>
    )
}

export default Card;