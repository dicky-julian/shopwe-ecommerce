import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Card, TextInputs, Topbar } from '../../Components';
import style from './style';

const Address = props => {
    const data = props.route.params ? props.route.params.data : '';
    const newAddress = props.route.params ? data.address.split('|') : '';
    const [address, city, province, country, zip_code] = newAddress;

    return (
        <View>
            <Topbar backNav={true} title={data ? 'Change Address' : 'Adding Shiping Address'} />
            <ScrollView style={{ ...style.fullContainer, flex: 1, padding: 10 }}>
                <View>
                    <TextInputs
                        title="Fullname"
                        placeholder="Insert Your Fullname"
                        value={data.name || ''}
                        onChangeText={(text) => setName(text)}
                    />
                    <TextInputs
                        title="Address"
                        placeholder="Insert Your Address"
                        value={address || ''}
                        onChangeText={(text) => setName(text)}
                    />
                    <TextInputs
                        title="City"
                        placeholder="Insert Your City"
                        value={city || ''}
                        onChangeText={(text) => setName(text)}
                    />
                    <TextInputs
                        title="State/Province/Region"
                        placeholder="Insert Your State/Province/Region"
                        value={province || ''}
                        onChangeText={(text) => setName(text)}
                    />
                    <TextInputs
                        title="Country"
                        placeholder="Insert Your Country"
                        value={country || ''}
                        onChangeText={(text) => setName(text)}
                    />
                    <TextInputs
                        title="Zip Code (Postal Code)"
                        placeholder="Insert Your Zip Code"
                        value={zip_code || ''}
                        onChangeText={(text) => setName(text)}
                    />
                    <Button title='Save Address' style='primary' type='fullwidth' onPress={() => console.log('haha')} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Address;