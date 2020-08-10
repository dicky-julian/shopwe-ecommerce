import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from './style';
import { color } from '../../Assets/Styles';

const Card = props => {
    const [borderCard, setBorderCard] = useState(0);
    const dataAddress = props.dataAddress;
    return (
        <View>
            {dataAddress ?
                <TouchableOpacity style={{ ...style.container, borderColor: borderCard ? color.primary : color.fade }} onPress={() => setBorderCard(props.selecting ? !borderCard : 0)}>
                    <View style={style.dataContainer}>
                        <Text style={{...style.mediumText, fontWeight: '700'}}>{dataAddress.name}</Text>
                        <Text style={style.mediumText}>{dataAddress.address}</Text>
                    </View>
                    <TouchableOpacity onPress={props.onPress}>
                        <Text style={{...style.mediumText, color: color.primary}}>Change</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                :
                <TouchableOpacity style={style.container}>

                </TouchableOpacity>
            }
        </View>
    )
}

export default Card;