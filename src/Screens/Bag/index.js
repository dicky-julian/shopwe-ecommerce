import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, ProductOrder, Topbar } from '../../Components';
import style from './style';

const Bag = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Topbar search={true} />
      <View style={{ flex: 1 }}>
        <ScrollView style={style.container}>
          <Text style={style.titleText}>My Bag</Text>
          <ProductOrder />
          <ProductOrder />
        </ScrollView>
        <View style={{...style.bottomBar, height: 125, bottom: 125}}>
          <View style={style.textContainer}>
            <Text style={style.fadeText}>Total amount:</Text>
            <Text style={style.darkText}>112$</Text>
          </View>
          <Button title='Checkout' style='primary' type='fullwidth' onPress={() => navigation.navigate('Checkout')} />
        </View>
      </View>
    </View>
  );
}

export default Bag;