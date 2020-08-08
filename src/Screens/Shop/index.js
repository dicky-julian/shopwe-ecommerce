import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Topbar, Product } from '../../Components';
import style from './style';
import { color } from '../../Assets/Styles';

const Shop = () => {
    const [search, setSearch] = useState();
    const data = {
        brand: 'OVJ',
        name: 'Blouse',
        rating: 4,
        price: '$30'
    }
    return (
        <View>
            <Topbar
                backNav='Home'
                title='Womens tops'
                search={txt => { setSearch(txt) }}
            />
            <View style={style.actionBar}>
                <TouchableOpacity style={style.barAction}>
                    <Ionicons name='filter' size={20} color={color.dark} />
                    <Text style={style.actionText}>Filters</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...style.barAction, width: Dimensions.get('window').width * 55 / 100 - 20, }}>
                    <Ionicons name='swap-vertical' size={20} color={color.dark} />
                    <Text style={style.actionText}>Price : lowest to high</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.sortAction}>
                    <Ionicons name='funnel-outline' size={20} color={color.dark} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={style.container}>
                    <Product
                        labelName='new'
                        data={data}
                        width={Dimensions.get('window').width * 50 / 100 - 30}
                    />
                    <Product
                        labelName='new'
                        data={data}
                        width={Dimensions.get('window').width * 50 / 100 - 30}
                    />
                    <Product
                        labelName='new'
                        data={data}
                        width={Dimensions.get('window').width * 50 / 100 - 30}
                    />
                    <Product
                        labelName='new'
                        data={data}
                        width={Dimensions.get('window').width * 50 / 100 - 30}
                    />
                    <Product
                        labelName='new'
                        data={data}
                        width={Dimensions.get('window').width * 50 / 100 - 30}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default Shop;