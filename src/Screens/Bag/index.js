import React from 'react';
import { Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProductOrder, Topbar } from '../../Components';
import style from './style';

const Bag = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Topbar search={true} />
      <ScrollView>
        <View style={style.container}>
          <Text style={style.titleText}>My Bag</Text>
          <ProductOrder />
          <ProductOrder />
        </View>
      </ScrollView>
      <View style={style.bottomBar}>
        <View style={style.textContainer}>
          <Text style={style.fadeText}>Total amount:</Text>
          <Text style={style.darkText}>112$</Text>
        </View>
        <TouchableOpacity style={style.button} onPress={() => navigation.navigate('ShipAddress')}>
          <Text style={style.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Bag;