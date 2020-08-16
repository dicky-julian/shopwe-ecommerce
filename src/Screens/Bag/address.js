import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Alert, Button, TextInputs, Topbar } from '../../Components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './style';

import { updateUser } from '../../Utils/Api';
import { setUpdateUser } from '../../Redux/Actions/users/users';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addressSchema } from '../../Utils/valid';

const Address = props => {
    const data = props.route.params ? props.route.params.data : '';
    const [labelOld, fullnameOld, addressOld, cityOld, stateOld, countryOld, zipOld, indexAddress] = data || [];
    const [label, setLabel] = useState(labelOld || '');
    const [fullname, setFullname] = useState(fullnameOld || '');
    const [address, setAddress] = useState(addressOld || '');
    const [city, setCity] = useState(cityOld || '');
    const [state, setState] = useState(stateOld || '');
    const [country, setCountry] = useState(countryOld || '');
    const [zip, setZip] = useState(zipOld || '');
    const [isSuccess, setSuccess] = useState('');
    const [isError, setError] = useState('');
    const [isDefault, setIsDefault] = useState(false)
    const user = props.user;

    const handleSubmit = async () => {
        let message = [];
        if (!fullname || !address || !city || !state || !country || !zip) {
            message.push('Data can\'t be empty.');
            setError(message);
            return;
        }
        const setData = {
            label,
            fullname,
            address,
            city,
            state,
            country,
            zip
        };
        try {
            await addressSchema.validateAsync(setData);
            const dataAddress = `${label}-${fullname}-${address}-${city}-${state}-${country}-${zip}`;
            data ? handleUpdateAddress(dataAddress) : handleAddAddress(dataAddress);
            setError('')
        } catch (error) {
            console.log(error);
            message.push(error.toString().replace('ValidationError:', ''));
            setError(message);
        };
    }

    const handleUpdateAddress = data => {
        const userAddress = user.address.split('|');
        let newAddress = '';
        userAddress[indexAddress] = data;

        userAddress.map(item => {
            newAddress = newAddress ? `${newAddress}|${item}` : item;
        })

        const result = { address: newAddress };
        updateUser(result, user.id, user.tokenLogin).then(res => {
            if (res) {
                setSuccess('Successfully updated address')
                props.setUpdateUser(result);
                props.navigation.goBack();
            } else setError('Something wrong, please check later')
        })
    }

    const handleAddAddress = data => {
        let userAddress = [];
        if (user.address) {
            userAddress = user.address.split('|');
        }
        let newAddress = '';
        userAddress.push(data);
        userAddress.map(item => {
            newAddress = newAddress ? `${newAddress}|${item}` : item;
        })
        let result = {};
        newAddress.split('|').length > 1
            ? isDefault
                ? result = { address: newAddress, address_active: userAddress.length - 1 }
                : result = { address: newAddress }
            : result = { address: newAddress, address_active: 0 };
        updateUser(result, user.id, user.tokenLogin).then(res => {
            if (res) {
                setSuccess('Successfully added address')
                props.setUpdateUser(result);
                props.navigation.goBack();
            } else setError('Something wrong, please check later')
        })
    }

    return (
        <View>
            <Topbar backNav={true} title={data ? 'Change Address' : 'Adding Shiping Address'} />
            <ScrollView style={{ ...style.fullContainer, flex: 1, padding: 10 }}>
                <View>
                    <TextInputs
                        title="Label"
                        placeholder="Insert Your Label"
                        value={label}
                        onChangeText={(text) => setLabel(text)}
                    />
                    <TextInputs
                        title="Fullname"
                        placeholder="Insert Your Fullname"
                        value={fullname}
                        onChangeText={(text) => setFullname(text)}
                    />
                    <TextInputs
                        title="Address"
                        placeholder="Insert Your Address"
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                    <TextInputs
                        title="City"
                        placeholder="Insert Your City"
                        value={city}
                        onChangeText={(text) => setCity(text)}
                    />
                    <TextInputs
                        title="State/Province/Region"
                        placeholder="Insert Your State/Province/Region"
                        value={state}
                        onChangeText={(text) => setState(text)}
                    />
                    <TextInputs
                        title="Country"
                        placeholder="Insert Your Country"
                        value={country}
                        onChangeText={(text) => setCountry(text)}
                    />
                    <TextInputs
                        title="Zip Code (Postal Code)"
                        placeholder="Insert Your Zip Code"
                        value={zip}
                        onChangeText={(text) => setZip(text)}
                    />
                    {user.address
                        ? <TouchableOpacity style={style.checkboxWrapper} onPress={() => setIsDefault(!isDefault)}>
                            <Text style={style.checkboxLabel}>Set as default</Text>
                            {isDefault
                                ? <Ionicons name='checkbox-outline' size={20} color='#000' />
                                : <Ionicons name='square-outline' size={20} color='#000' />}
                        </TouchableOpacity>
                        : <></>}
                    <Button title='Save Address' style='primary' type='fullwidth' onPress={() => handleSubmit()} />
                </View>
            </ScrollView>
            {isSuccess ?
                <Alert title={isSuccess} type='success' onPress={() => setSuccess()} /> : <></>
            }
            {isError ?
                <Alert title={isError} type='failed' onPress={() => setError()} /> : <></>
            }
        </View>
    )
}

const mapStateToProps = state => ({
    user: state.auth.auth
});

const mapDispathToProps = { setUpdateUser };

export default connect(mapStateToProps, mapDispathToProps)(Address);