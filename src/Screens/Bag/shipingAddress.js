import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, Card, Topbar } from '../../Components';
import style from './style';
import store from './store';
import { color } from '../../Assets/Styles';

import { fetchPayment } from '../../Redux/Actions/transactions/payments';

const shipingAddress = props => {
    const navigation = useNavigation();
    const [activeCard, setActiveCard] = useState(1);
    const payment = props.payment;

    useEffect(() => {
        if (!payment) {
            props.fetchPayment();
        }
    }, [])

    return (
        <View>
            <Topbar backNav={true} title='Shiping Address' />
            <View style={style.fullContainer}>
                <View style={style.searchBar}>
                    <Ionicons name='search' size={16} color={color.fade} />
                    <TextInput
                        style={style.searchInput}
                        placeholder='Search'
                        placeholderTextColor={color.fade}
                        onChangeText={text => setSearch(text)}
                        onSubmitEditing={({ nativeEvent }) => handleSubmitSearch(nativeEvent.text)}
                    />
                </View>

                <Text style={style.subTitleText}>Shipping Address</Text>
                <View>
                    {store.dataAddress.map((address, key) => {
                        return (
                            <Card
                                key={key}
                                dataAddress={address}
                                isActive={address.id === activeCard ? true : false}
                                onPress={() => setActiveCard(address.id)}
                            />
                        )
                    })}
                    <Button title='Add new address' type='fullwidth' onPress={() => navigation.navigate('Address')} />
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = state => ({
    payment: state.transaction.payment
});

const mapDispathToProps = { fetchPayment };

export default connect(mapStateToProps, mapDispathToProps)(shipingAddress);