import React, { useState } from 'react';
import { Text, TouchableHighlight, ScrollView, View } from 'react-native';
import moment from 'moment';
import { Button, TextInputs, DateTimeInputs, Topbar } from '../../Components';
import style from './style';

const Setting = props => {
    const [date, setDate] = useState(new Date());
    return (
        <View style={{ flex: 1 }}>
            <Topbar backNav={true} title="Checkout" />
            <View style={{ flex: 1 }}>
                <View style={style.container}>
                    <ScrollView>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={style.headText}>Profile</Text>
                            <Text style={{ ...style.darkText, marginTop: 25, marginBottom: 25 }}>Personal Information</Text>
                            <TextInputs
                                title="Fullname"
                                placeholder="Insert Your Fullname"
                                value=''
                                onChangeText={(text) => setName(text)}
                            />
                            <DateTimeInputs
                                title="Date of Birth"
                                placeholder="Insert Your Date of Birth"
                                date={date}
                                onDateChange={() => setDate}
                            />
                            <Text style={{ ...style.darkText, marginTop: 25, marginBottom: 25 }}>Password</Text>
                            <TextInputs
                                title="Password"
                                placeholder="Insert Your Password"
                                value=''
                                onChangeText={(text) => setName(text)}
                            />
                        </View>
                        <Button
                            title="Save Profile"
                            style="primary"
                            type="fullwidth"
                            onPress={() => navigation.navigate('ShipStatus')}
                        />
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Setting;