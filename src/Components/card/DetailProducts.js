import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import ButtonModal from '../Button/ButtonModal';
import ButtonLarge from '../Button/ButtonLarge';
import Headline2 from '../Text/Headline2'
import HelperText from '../Text/HelperText';
import DescText from '../Text/DescText';
import { ScrollView } from 'react-native-gesture-handler';
import Rating from '../Rating';

const DetailProducts = () => {
  return (
    <ScrollView>
      <View>
        <View>
          <ImageBackground
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={styles.image}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.modalsCard}>
            <ButtonModal style={styles.modals} title="Size" />
            <ButtonModal style={styles.modals} title="Color" />
          </View>

          <View style={styles.detailCard}>
            <View style={styles.modalsCard}>
              <Headline2 title="H & M" />
              <Headline2 title="$ 19.99" />
            </View>
            <HelperText title="categori" />
            <Rating/>
            <DescText
              style={styles.desc}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            quam et ante molestie fringilla eu eget neque. Sed at mauris
            lobortis, varius neque vel, imperdiet erat. Cras elementum augue
            quis purus egestas laoreet. Suspendisse ligula magna, egestas vitae
            molestie non, hendrerit quis nisl."
            />
          </View>
        </View>
        <View style={styles.button}>
          <ButtonLarge title="ADD TO CART" />
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailProducts;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    height: 400,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  modalsCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-around',
    marginBottom: 10,
  },
  modals: {
    width: 170
  },
  detailCard: {
    marginBottom: 30,
  },
  desc: {
    textAlign: 'justify'
  },
  button: {
    marginRight: 10,
    marginLeft: 10,
  }
});
