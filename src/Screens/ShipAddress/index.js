import React from 'react';
import {Text, View, TextInput, ScrollView} from 'react-native';
import styles from './style';
import {ShippingAddress, Subheads, Topbar} from '../../Components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../../Assets/Styles';

const ShipAddress = () => {
  const handleSubmitSearch = (text) => {
    console.log(text);
  };
  return (
    <View>
      <Topbar backNav={true}/>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={16} color={color.fade} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={color.fade}
            onChangeText={(text) => setSearch(text)}
            onSubmitEditing={({nativeEvent}) =>
              handleSubmitSearch(nativeEvent.text)
            }
          />
        </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.subheads}>
            <Subheads title="Shipping Address" />
          </View>

          <View style={styles.box}>
            <ShippingAddress nameReceiver="Sinta" address="kota bogor" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ShipAddress;
