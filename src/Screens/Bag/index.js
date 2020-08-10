import React from 'react';
import {Dimensions, Text, ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, ProductOrder, Topbar} from '../../Components';
import style from './style';

const Bag = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Topbar search={true} />
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{height: Dimensions.get('window').height - 260}}>
          <ScrollView style={style.container}>
            <Text style={style.titleText}>My Bag</Text>
            <ProductOrder />
            <ProductOrder />
            <View style={{height: 150}}></View>
          </ScrollView>
        </View>
        <View style={{...style.bottomBar, height: 125, bottom: 0}}>
          <View style={style.textContainer}>
            <Text style={style.fadeText}>Total amount:</Text>
            <Text style={style.darkText}>112$</Text>
          </View>
          <Button
            title="Checkout"
            style="primary"
            type="fullwidth"
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      </View>
    </View>
  );
};

export default Bag;
