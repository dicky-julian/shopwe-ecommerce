import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './style';
import { color } from '../../Assets/Styles';

const RenderRating = (props) => {
    const elements = [];
    const rating = props.rating;
    let maxRating = 5;
    for (let i = 0; i < rating; i++) {
        const key = i + 1;
        elements.push(<Ionicons style={style.rating} name='star' size={15} color={color.gold} key={key} />);
        --maxRating;
    }
    if (maxRating) {
        for (let i = 0; i < maxRating; i++) {
            const key = 5 - i;
            elements.push(<Ionicons style={style.rating} name='star-outline' size={15} color={color.gold} key={key} />)
        }
    }
    return elements;
}

export {
    RenderRating
}