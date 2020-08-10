import React, {useState} from 'react';
import {
  Dimensions,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View, 
  ImageBackground,
} from 'react-native';
import {
  ButtonModal,
  Headline2,
  HelperText,
  Rating,
  Topbar,
  ButtonLarge,
} from '../../Components';
import styles from './style';
import {color} from '../../Assets/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailProduct = () => {
   const [modalVisible, setModalVisible] = useState(false);
   const [activeSort, setActiveSort] = useState('');
    const sortActionList = [
      'XS',
      'S',
      'M',
      'L',
      'XL',
    ];
   
   const handleSetSort = (list) => {
     setActiveSort(list);
     setModalVisible(false);
   };
   
  return (
    <View style={styles.container}>
      <Topbar backNav={true} title="Brand Name" />
      <ScrollView>
        <ImageBackground
          source={{uri: 'https://reactjs.org/logo-og.png'}}
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
              onPress={() => setModalVisible(true)}>
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
              onPress={() => setModalVisible(true)}>
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
              <Headline2 title="H & M" />
              <Headline2 title="$ 19.99" />
            </View>
            <HelperText title="categori" />
            <Rating />
            <Text style={styles.descText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vitae quam et ante molestie fringilla eu eget neque.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <ButtonLarge title="ADD TO CART" />
      </View>

      {/* start modal size */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          style={styles.modalFade}
          onPress={() => setModalVisible(false)}></TouchableOpacity>
        <View style={styles.modalContainer}>
          <View style={styles.scrollTit}></View>
          <Text style={styles.titleText}>Size</Text>
          <View style={styles.modalsCard}>
            {sortActionList.map((list, key) => {
              if (list === activeSort) {
                return (
                  <TouchableOpacity
                    style={{
                      ...styles.listContainer,
                      backgroundColor: color.primary,
                      width: (Dimensions.get('window').width * 33) / 100 - 20,
                    }}
                    key={key}
                    onPress={() => handleSetSort(list)}>
                    <Text style={{...styles.listText, color: color.light}}>
                      {list}
                    </Text>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    style={styles.listContainer}
                    key={key}
                    onPress={() => handleSetSort(list)}>
                    <Text style={styles.listText}>{list}</Text>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
          <View
            style={{
              borderBottomColor: '#9B9B9B',
              borderBottomWidth: 0.5,
            }}
          />
          <Text style={styles.footerText}>Size Info</Text>
        </View>
      </Modal>
      {/* end modal size */}
    </View>
  );
};

export default DetailProduct;
