import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Topbar } from '../../Components';
import style from './style';
import { color } from '../../Assets/Styles';

const Search = () => {

    const handleSubmitSearch = (text) => {
        console.log(text)
    }

    return (
        <View>
            <Topbar backNav={true}>
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
            </Topbar>
            <ScrollView>
                <View style={style.container}>
                    <View style={{ padding: 20 }}>
                        <Text style={style.titleText}>Popular Search</Text>
                        <View style={style.labelContainer}>
                            <TouchableOpacity style={style.label}>
                                <Text style={style.labelText}>work shoes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.label}>
                                <Text style={style.labelText}>swimming suit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.label}>
                                <Text style={style.labelText}>wakadomopoe</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.label}>
                                <Text style={style.labelText}>wannait</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.label}>
                                <Text style={style.labelText}>wodododo Hahaha</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.label}>
                                <Text style={style.labelText}>work shoes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Search;