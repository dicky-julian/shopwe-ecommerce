import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, Card, Topbar } from '../../Components';
import style from './style';
import { color } from '../../Assets/Styles';

const shipingAddress = props => {
    const dataAddress = {
        name: 'John Doe',
        address: 'Jalan Gempol Marga Bhakti RT 02 RW 10 No. 3, Tanjungrejo, Sukun, Malang 65147'
    }

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
                    <Card dataAddress={dataAddress} selecting={true} />
                    <Card dataAddress={dataAddress} selecting={true} />
                    <Button title='Add new address' type='fullwidth' onPress={() => console.log('haha')} />
                </View>
            </View>
        </View>
    )
}

export default shipingAddress;