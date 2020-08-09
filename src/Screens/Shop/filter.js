import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { Topbar } from '../../Components';
import style from './style';
import { color as colors } from '../../Assets/Styles';

const Filter = () => {
    const [color, setColor] = useState('#000');
    const [size, setSize] = useState('XS');
    const [category, setCategory] = useState('All');
    const colorPallette = ['#000', '#F7F7F7', '#B82222', '#BEA9A9', '#E2BB8D', '#151867'];
    const sizePallette = ['XS', 'S', 'M', 'L', 'XL'];
    const categoryPallette = ['All', 'Women', 'Men', 'Boys', 'Girls', 'Kids'];
    return (
        <View>
            <Topbar backNav={true} title='Filters' />
            <ScrollView>
                <View style={style.filterContainer}>
                    {/* COLOR PICKER */}
                    <View>
                        <Text style={style.titleText}>Color</Text>
                        <View style={style.filterCard}>
                            {colorPallette.map((col, key) => {
                                if (col === color) return (
                                    <TouchableOpacity style={{ ...style.colorWrapper, borderColor: colors.primary }} key={key} onPress={() => setColor()}>
                                        <View style={{ ...style.colorPicker, backgroundColor: col }}></View>
                                    </TouchableOpacity>
                                )
                                else return (
                                    <TouchableOpacity style={{ ...style.colorWrapper, borderColor: 'transparent' }} key={key} onPress={() => setColor(col)}>
                                        <View style={{ ...style.colorPicker, backgroundColor: col }}></View>
                                    </TouchableOpacity>
                                )
                            })}

                        </View>
                    </View>
                    {/* SIZES FILTER */}
                    <View>
                        <Text style={style.titleText}>Sizes</Text>
                        <View style={style.filterCard}>
                            {sizePallette.map(siz => {
                                if (siz === size) return (
                                    <TouchableOpacity style={{ ...style.sizePicker, backgroundColor: colors.primary, borderColor: colors.primary }} onPress={() => setSize()}>
                                        <Text style={{ fontSize: 16, color: colors.light }}>{siz}</Text>
                                    </TouchableOpacity>
                                )
                                else return (
                                    <TouchableOpacity style={{ ...style.sizePicker, backgroundColor: 'transparent', borderColor: colors.fade }} onPress={() => setSize(siz)}>
                                        <Text style={{ fontSize: 16, color: colors.dark }}>{siz}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                    {/* CATEGORIES FILTER */}
                    <View>
                        <Text style={style.titleText}>Category</Text>
                        <View style={style.filterCard}>
                            {categoryPallette.map(cat => {
                                if (cat === category) return (
                                    <TouchableOpacity style={{ ...style.categoryPicker, backgroundColor: colors.primary, borderColor: colors.primary }} onPress={() => setCategory()}>
                                        <Text style={{ fontSize: 16, color: colors.light }}>{cat}</Text>
                                    </TouchableOpacity>
                                )
                                else return (
                                    <TouchableOpacity style={{ ...style.categoryPicker, backgroundColor: 'transparent', borderColor: colors.fade }} onPress={() => setCategory(cat)}>
                                        <Text style={{ fontSize: 16, color: colors.dark }}>{cat}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={style.bottomBar}>
                <TouchableOpacity
                    style={{
                        ...style.button,
                        borderColor: colors.dark,
                    }}>
                    <Text style={{ fontSize: 16, color: colors.dark }}>Discard</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...style.button,
                        backgroundColor: colors.primary,
                        borderColor: 'transparent',
                    }}>
                    <Text style={{ fontSize: 16, color: colors.light }}>Apply</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Filter;