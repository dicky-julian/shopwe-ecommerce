import React from 'react';
import { Text, View, Image } from 'react-native';
import { Headline3, Topbar, Headline, HelperText } from '../../Components';
import styles from './style';
import {color} from '../../Assets/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
    return (
      <View>
        <Topbar search={true} />
        <View style={styles.headline}>
          <Headline3 title="My Profile" />
        </View>

        <View style={styles.container}>
          <View style={[styles.list, styles.cardImage]}>
            <Image
              source={{uri: 'https://reactjs.org/logo-og.png'}}
              style={styles.image}
            />
            <View style={[styles.list, styles.cardText]}>
              <Headline title="Matilda Brown" />
              <HelperText title="matildarown@main.com" />
            </View>
          </View>

          <View style={styles.list}>
            <View style={styles.cardIcon}>
              <Headline title="My Orders" />
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={color.dark}
              />
            </View>
            <View style={styles.cardIcon}>
              <HelperText title="Already have 12 orders" />
            </View>
          </View>

          <View style={styles.list}>
            <View style={styles.cardIcon}>
              <Headline title="Shipping Address" />
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={color.dark}
              />
            </View>
            <View style={styles.cardIcon}>
              <HelperText title="3 Address" />
            </View>
          </View>

          <View style={styles.list}>
            <View style={styles.cardIcon}>
              <Headline title="Settings" />
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={color.dark}
              />
            </View>
            <View style={styles.cardIcon}>
              <HelperText title="Notifications, password" />
            </View>
          </View>

        </View>
      </View>
    );
}

export default Profile;