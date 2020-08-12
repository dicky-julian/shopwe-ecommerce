import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Product from '../Product';
import style from './style';

const ProductCollection = (props) => {
  const navigation = useNavigation();
  const {
    data,
    label,
    labelName,
  } = props;
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
      <ScrollView
        style={style.collectionContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {
          data.map(product => {
            return (
              <Product
                key={product.id}
                label={label}
                labelName='New'
                data={product}
                onPress={() => navigation.navigate('DetailProduct', { product: product })}
              />
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default ProductCollection;