import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import ButtonsModal from '../Button/ButtonsModal';
import ButtonLarge from '../Button/ButtonsLarge';
import Subheads from '../Text/Subheads'
import HelperText from '../Text/HelperText';
import DescText from '../Text/DescText';
import { ScrollView } from 'react-native-gesture-handler';

const DetailProducts = () => {
  return (
    <View>
      <ScrollView>
        <View>
          <ImageBackground
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={styles.image}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.modalsCard}>
            <ButtonsModal style={styles.modals} title="Size" />
            <ButtonsModal style={styles.modals} title="Color" />
          </View>

          <View style={styles.detailCard}>
            <Subheads title="H & M" />
            <HelperText title="categori" />
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
      </ScrollView>
<View style={styles.button}>
  <ButtonLarge title="ADD TO CART" />
</View>
      
    </View>
  );
};

export default DetailProducts;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    height: 400,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  modalsCard: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignContent: 'center',
    marginBottom: 10,
  },
  modals: {
    flex: 1,
    // justifyContent: 'center',
    alignContent: 'space-between',
    flexWrap: 'wrap',
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
