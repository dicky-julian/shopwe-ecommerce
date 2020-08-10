import React, { useState } from 'react';
import { Dimensions, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Topbar, Product } from '../../Components';
import style from './style';
import { color } from '../../Assets/Styles';

const Shop = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [activeSort, setActiveSort] = useState('');
    const data = {
        brand: 'OVJ',
        name: 'Blouse',
        rating: 4,
        price: '$30'
    }
    const sortActionList = ['Popular', 'Newest', 'Customer review', 'Price: Lowest to high', 'Price: Highest to low']
    const navigation = useNavigation();
    const handleSetSort = (list) => {
        setActiveSort(list);
        setModalVisible(false);
    }
    return (
        <View>
            <Topbar
                backNav='Home'
                title='Womens tops'
                search={true}
            />
            <View style={style.actionBar}>
                <TouchableOpacity style={style.barAction} onPress={() => navigation.navigate('Filter')}>
                    <Ionicons name='filter' size={20} color={color.dark} />
                    <Text style={style.actionText}>Filters</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...style.barAction, width: Dimensions.get('window').width * 55 / 100 - 20, }} onPress={() => setModalVisible(true)}>
                    <Ionicons name='swap-vertical' size={20} color={color.dark} />
                    <Text style={style.actionText}>Price : lowest to high</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.sortAction} onPress={() => setModalVisible(true)}>
                    <Ionicons name='funnel-outline' size={20} color={color.dark} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={style.container}>
                    <Product
                        labelName='new'
                        data={data}
                        width={Dimensions.get('window').width * 50 / 100 - 22.5}
                    />
                    <Product
                        labelName='new'
                        data={data}
                        width={Dimensions.get('window').width * 50 / 100 - 22.5}
                    />
                    <Product
                        labelName='new'
                        data={data}
                        width={Dimensions.get('window').width * 50 / 100 - 22.5}
                    />
                </View>
            </ScrollView>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}>
                <TouchableOpacity style={style.modalFade} onPress={() => setModalVisible(false)}></TouchableOpacity>
                <View style={style.modalContainer}>
                    <View style={style.scrollTit}></View>
                    <Text style={style.titleText}>Sort by</Text>
                    <View>
                        {sortActionList.map((list, key) => {
                            if (list === activeSort) {
                                return (
                                    <TouchableOpacity style={{ ...style.listContainer, backgroundColor: color.primary }} key={key} onPress={() => handleSetSort(list)}>
                                        <Text style={{ ...style.listText, color: color.light }}>{list}</Text>
                                    </TouchableOpacity>
                                )
                            } else {
                                return (
                                    <TouchableOpacity style={style.listContainer} key={key} onPress={() => handleSetSort(list)}>
                                        <Text style={style.listText}>{list}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        })}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Shop;