import React from 'react';
import { Dimensions, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import {
  Topbar,
} from '../../Components';
import styles from './style';
import { color } from '../../Assets/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: color.light,
      }}>
      <Topbar search={true} />
      <View style={styles.headline}>
        <Text style={styles.headText}>My Profile</Text>
      </View>

      <View style={styles.container}>
        <View style={[styles.list, styles.cardImage]}>
          <Image
            source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={styles.image}
          />
          <View style={[styles.list, styles.cardText]}>
            <Text style={styles.darkText}>Matilda Brown</Text>
            <Text style={styles.fadeText}>matildarown@main.com</Text>
          </View>
        </View>

        <View style={styles.list}>
          <TouchableOpacity onPress={() => navigation.navigate('MyOrder')}>
            <View style={styles.cardIcon}>
              <Text style={styles.darkText}>My Orders</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={color.dark}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.cardIcon}>
            <Text style={styles.fadeText}>Already have 12 orders</Text>
          </View>
        </View>

        <View style={styles.list}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ShipAddress')}>
            <View style={styles.cardIcon}>
              <Text style={styles.darkText}>Shipping Address</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={color.dark}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.cardIcon}>
            <Text style={styles.fadeText}>3 Address</Text>
          </View>
        </View>

        <View style={styles.list}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingProfile')}>
            <View style={styles.cardIcon}>
              <Text style={styles.darkText}>Settings</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={color.dark}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.cardIcon}>
            <Text style={styles.fadeText}>Notifications, password</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Profile;