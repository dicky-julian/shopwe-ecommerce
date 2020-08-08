import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Product from '../Product';
import style from './style';

const ProductCollection = (props) => {
    const navigation = useNavigation();
    const data = {
        brand: 'OVJ',
        name: 'Blouse',
        rating: 4,
        price: '$30'
    }
    return (
        <View style={style.container}>
            <View style={style.titleHeader}>
                <View>
                    <Text style={style.titleText}>{props.title}</Text>
                    <Text style={style.descriptionText}>{props.description}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
                    <Text style={style.actionText}>View all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={style.collectionContainer} horizontal={true}>
                <Product
                    labelName='new'
                    data={data}
                />
                <Product
                    label='disc'
                    labelName='-20%'
                    data={data}
                />
                <Product
                    label='disc'
                    labelName='-20%'
                    data={data}
                />
            </ScrollView>
        </View>
    )
}

export default ProductCollection;