import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Alert,
} from 'react-native';
import {Topbar, Button} from '../../Components';
import styles from './style';
import {color} from '../../Assets/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {color as colors} from '../../Assets/Styles';
import { RenderRating } from '../../Components/Product/action';
import { apiUri } from '../../Utils/config';

const DetailProduct = (props) => {
  const navigation = useNavigation();
  const { product } = props.route.params;
  const [modalVisibleSize, setModalVisibleSize] = useState(false);
  const [activeSize, setActiveSize] = useState('');
  const [modalVisibleColor, setModalVisibleColor] = useState(false);
  const [activeColor, setActiveColor] = useState('');
  const colorActionList = product.colors.split('|');
  // const colorActionList = [
  //   '#000',
  //   '#F7F7F7',
  //   '#B82222',
  //   '#BEA9A9',
  //   '#E2BB8D',
  // ];
  const sizeActionList = product.sizes.split('|');

  const handleSetSize = (list) => {
    setActiveSize(list);
    setModalVisibleSize(false);
  };

  const handleSetColor = (list) => {
    setActiveColor(list);
    setModalVisibleColor(false);
  };

  /**
   * Life Cycles
   */

   /**
    * Logics
    */
  const addToCart = () => {
    if (activeColor === '' || activeColor === undefined || activeColor.length < 1) Alert.alert('No Color Choosed!', 'Please choose one color of product.')
    if (activeSize === '' || activeSize === undefined || activeSize.length < 1) Alert.alert('No Size Choosed!', 'Please choose one size of product.')
    const detail_product = {
      "product_id": product.id,
      "size": activeSize,
      "color": activeColor,
      "price": product.price,
      "quantity": 1,
      "subtotal": 1*parseInt(product.price)
    }
    console.log(detail_product)
    // navigation.navigate('Checkout')
  }
  return (
    <View style={styles.container}>
      <Topbar backNav={true} title={product.name} />
      <ScrollView>
        <ImageBackground
          source={{ uri: `${apiUri.newImagePath}/${product.image}`}}
          style={styles.image}
        />
        <View style={styles.DetailStyle}>
          <View style={styles.modalsCard}>
            <TouchableOpacity
              style={[
                styles.modals,
                {
                  ...styles.barAction,
                  width: (Dimensions.get('window').width * 45) / 100 - 20,
                },
              ]}
              onPress={() => setModalVisibleSize(true)}>
              <Text style={styles.actionText}>Size</Text>
              <Ionicons
                name="chevron-down-outline"
                size={20}
                color={color.dark}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.modals,
                {
                  ...styles.barAction,
                  width: (Dimensions.get('window').width * 45) / 100 - 20,
                },
              ]}
              onPress={() => setModalVisibleColor(true)}>
              <Text style={styles.actionText}>Color</Text>
              <Ionicons
                name="chevron-down-outline"
                size={20}
                color={color.dark}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.detailCard}>
            <View style={styles.modalsCard}>
              <Text style={styles.fadeText}>{product.name}</Text>
              <Text style={styles.fadeText}>$ {product.price}</Text>
            </View>
            <Text style={styles.darkText}>{product.category_name}</Text>
            <View style={styles.ratingContainer}>
              <RenderRating rating={product.rating} />
            </View>
            <Text style={styles.descText}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Button
          title="ADD TO CART"
          style="primary"
          type="fullwidth"
          onPress={() => addToCart()}
        />
      </View>

      {/* start modal size */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleSize}>
        <TouchableOpacity
          style={styles.modalFade}
          onPress={() => setModalVisibleSize(false)}></TouchableOpacity>
        <View style={styles.modalContainer}>
          <View style={styles.scrollTit}></View>
          <Text style={styles.titleText}>Size</Text>
          <View style={styles.modalsCard}>
            {sizeActionList.map((list, key) => {
              if (list === activeSize) {
                return (
                  <TouchableOpacity
                    style={{
                      ...styles.listContainer,
                      backgroundColor: color.primary,
                      width: (Dimensions.get('window').width * 33) / 100 - 20,
                    }}
                    key={key}
                    onPress={() => handleSetSize(list)}>
                    <Text style={{...styles.listText, color: color.light}}>
                      {list.toUpperCase()}
                    </Text>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    style={styles.listContainer}
                    key={key}
                    onPress={() => handleSetSize(list)}>
                    <Text style={styles.listText}>{list.toUpperCase()}</Text>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
          <View style={{borderWidth: 0.5, borderColor: colors.fade}}>
            <Text style={styles.footerText}>Size Info</Text>
          </View>
        </View>
      </Modal>
      {/* end modal size */}

      {/* start modal color */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleColor}>
        <TouchableOpacity
          style={styles.modalFade}
          onPress={() => setModalVisibleColor(false)}></TouchableOpacity>
        <View style={styles.modalContainer}>
          <View style={styles.scrollTit}></View>
          <Text style={styles.titleText}>Color</Text>
          <View style={styles.modalsCard}>
            {colorActionList.map((col, key) => {
              if (col === activeColor) {
                return (
                  <TouchableOpacity
                    style={{ 
                      ...styles.colorWrapper,
                      borderColor: colors.primary,
                    }}
                    key={key}
                    onPress={() => handleSetColor(col)}>
                    <View
                      style={{
                        ...styles.colorPicker,
                        backgroundColor: col,
                      }}></View>
                  </TouchableOpacity>
                );
              } else
                return (
                  <TouchableOpacity
                    style={{
                      ...styles.colorWrapper,
                      borderColor: 'transparent',
                    }}
                    key={key}
                    onPress={() => handleSetColor(col)}>
                    <View
                      style={{
                        ...styles.colorPicker,
                        backgroundColor: col,
                      }}></View>
                  </TouchableOpacity>
                );
            })}
          </View>
        </View>
      </Modal>
      {/* end modal color */}
    </View>
  );
};

export default DetailProduct;
