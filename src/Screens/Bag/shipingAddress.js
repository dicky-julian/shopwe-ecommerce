import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, Card, Topbar } from '../../Components';
import style from './style';
import { color } from '../../Assets/Styles';

import { updateUser } from '../../Utils/Api';
import { setUpdateUser } from '../../Redux/Actions/users/users';
import { splitString } from '../../Utils/helper';

const shipingAddress = props => {
    const navigation = useNavigation();
    const user = props.user;
    const [activeCard, setActiveCard] = useState(user.address_active);
    const [address, setAddress] = useState();

    useEffect(() => {
        if (!address) {
            const userAddress = splitString(user.address);
            setAddress(userAddress);
        }
    })

    const handleActivate = (key) => {
        const data = { address_active: key };
        updateUser(data, user.id).then(res => {
            if (res) {
                props.setUpdateUser(data);
                setActiveCard(key);
            }
        })

    }

    return (
        <View>
            <Topbar backNav={true} title='Shiping Address' />
            <View style={style.fullContainer}>
                {/* <View style={style.searchBar}>
                    <Ionicons name='search' size={16} color={color.fade} />
                    <TextInput
                        style={style.searchInput}
                        placeholder='Search'
                        placeholderTextColor={color.fade}
                        onChangeText={text => setSearch(text)}
                        onSubmitEditing={({ nativeEvent }) => handleSubmitSearch(nativeEvent.text)}
                    />
                </View> */}

                <Text style={style.subTitleText}>Shipping Address</Text>
                <View>
                    {address ?
                        address.map((address, key) => {
                            return (
                                <Card
                                    key={key}
                                    dataAddress={address}
                                    indexCard={key}
                                    isActive={key === activeCard ? true : false}
                                    onPress={() => handleActivate(key)}
                                />
                            )
                        })
                        :
                        <></>}
                    <Button title='Add new address' type='fullwidth' onPress={() => navigation.navigate('Address')} />
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = state => ({
    payment: state.transaction.payment,
    user: state.auth.auth
});

const mapDispathToProps = { setUpdateUser };

export default connect(mapStateToProps, mapDispathToProps)(shipingAddress);