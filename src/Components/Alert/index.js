import React from 'react';
import { Text, View } from 'react-native';
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Alert = props => {
    const { title, type } = props;
    return (
        <View style={[style.alert, type === 'success' ? style.buttonSuccess : style.buttonFailed]}>
            <View style={{flexDirection: 'column'}}>
                {Array.isArray(title)
                    ? title.length > 0 && title.map(item => <Text style={style.alertText}>{item}</Text>)
                    : <Text style={style.alertText}>{title}</Text>}
            </View>
            <Ionicons name='close' size={20} color='#fff' onPress={props.onPress} />
        </View>
    )
}

export default Alert;