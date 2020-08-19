import React from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import style from './style';
import { color } from '../../Assets/Styles';

const Button = props => {
    const textColor = props.style === 'primary' ? color.light : color.dark;
    const background = props.style === 'primary' ? color.primary  : props.style === 'transparent' ? 'transparent' : props.style;
    const border = props.style === 'primary' ? color.primary : color.dark;
    const width = props.type === 'fullwidth' ? Dimensions.get('window').width - 30 : Dimensions.get('window').width * 45 / 100 - 10;
    return (
        <TouchableOpacity style={{ ...style.button, width: width, backgroundColor: background, borderColor: border }} onPress={props.onPress}>
            <Text style={{...style.buttonText, color: textColor}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button;