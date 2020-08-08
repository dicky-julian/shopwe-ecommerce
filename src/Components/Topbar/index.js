import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './style';
import { color } from '../../Assets/Styles';

const Topbar = (props) => {
    const { backNav, title, search } = props;
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            {props.children ? props.children
                :
                <View style={style.topbarContainer}>
                    <TouchableOpacity style={style.barAction} onPress={() => navigation.navigate(backNav)}>
                        {backNav ?
                            <Ionicons name='chevron-back-outline' size={20} color={color.dark}/> : <></>}
                    </TouchableOpacity>
                    <Text style={style.titleText}>
                        {title ? title : ''}
                    </Text>
                    <TouchableOpacity style={style.barAction}>
                        {search ?
                            <Ionicons name='search-outline' size={20} color={color.dark} /> : <></>}
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default Topbar;