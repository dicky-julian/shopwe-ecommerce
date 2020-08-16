import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Topbar } from '../../Components';
import style from './style';
import { color } from '../../Assets/Styles';
import { connect } from 'react-redux';
import { setSearch } from '../../Redux/Actions/products/products';
import { useNavigation } from '@react-navigation/native';
import { searchSchema } from '../../Utils/valid';

const Search = (props) => {
  const navigation = useNavigation();
  const [isSuccess, setSuccess] = useState('');
  const [isError, setError] = useState('');
  
  const {
    search
  } = props.products;
  const handleSubmitSearch = async (text) => {
    try {
      await searchSchema.validateAsync(text);
    } catch (error) {
      console.log(error);
       const errorMessage = error.toString().replace('ValidationError:', '');
       setError(errorMessage);
    }
    if (text.length > 0) {
      props.setSearch(text);
      navigation.goBack();
    }
  }
  const setSearch = (text) => {
    // console.log(text);
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
const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = {
  setSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);