import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import Axios from 'axios';

import { API_URL } from '../../../env';
import { apiUri } from '../../Utils/config';
import { Topbar, Button } from '../../Components';
import { color } from '../../Assets/Styles';
import styles from './style';

import { createImageFormData } from '../../Utils/helper';
import { setUpdateUser } from '../../Redux/Actions/users/users';
import { updateUser } from '../../Utils/Api';
import { get_all_order } from '../../Redux/Action/order';
import { logout } from '../../Redux/Actions/auth';


const Profile = (props) => {
  const navigation = useNavigation();
  const user = props.auth.auth;
  const [totalOrders, setTotalOrders] = useState(0)
  const {tokenLogin, image, full_name, username, email, id, address} = props.auth.auth;
  const [addressAvailable, setAddressAvailable] = useState(address ? address.split('|').length : 0)
  const [newImage, setNewImage] = useState(null)
  const [upload, setUpload] = useState(false)
  // const [profiles, setProfiles] = useState({});
  useEffect(() => {
    // checkAuth()
    getUserOrders()
  }, [])

  useEffect(() => {
    setAddressAvailable(address ? address.split('|').length : 0);
  }, [props.auth.auth])

  useEffect(() => {
    if (newImage !== null) handleUploadPhoto();
  }, [newImage])

  const checkAuth = () => {
    !tokenLogin && navigation.navigate('Auth')
  }
  const getUserOrders = () => {
    Axios({
      method: 'GET',
      url: `${API_URL}/users/${id}/orders`,
      headers: {
        Authorization: tokenLogin,
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      setTotalOrders(res.data.data.length)
    }).catch((error) => {
      console.log(error.response);
    });
  }

  /**
   * Logics
   */
  const logout = () => {
    Alert.alert(
      "Logout.",
      "This will end your session, anything unsaved will be lost!. Continue?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => { 
            props.logout()
            navigation.navigate('Auth')
          }
        }
      ],
      { cancelable: false }
    );
  }
  const handleChoosePhoto = () => {
    console.log('test');
    const options = {
      noData: true,
    }
    ImagePicker.showImagePicker(options, response => {
      if (response.uri) {
        if (response.fileSize > 1024 * 1024 * 3) {
          Alert.alert('Image size is too large.', 'The maximum size is 3 MB. Please choose another image.')
        } else {
          setNewImage(response);
        }
      }
    })
  }
  const handleUploadPhoto = () => {
    const formData = createImageFormData(null, newImage, 'image')
    updateUser(formData, user.id, user.tokenLogin).then(res => {
      props.setUpdateUser({ user_id: user.id, image: res.data.image});
      console.log(user)
    }).catch(err => console.log(err))
  }
  return (
    <View
      style={{
        backgroundColor: color.light,
      }}>
      <Topbar search={false} />
      <View style={styles.headline}>
        <Text style={styles.headText}>My Profile</Text>
      </View>
      {tokenLogin
        ?
        <View style={styles.container}>
          <View style={[styles.list, styles.cardImage]}>
            {newImage
              ? <TouchableOpacity onPress={() => handleChoosePhoto()}>
                <Image
                  source={{ uri: `${newImage.uri}` }}
                  style={styles.image}
                />
              </TouchableOpacity>
              : <TouchableOpacity onPress={() => handleChoosePhoto()}>
                <Image
                  source={{ uri: `${apiUri.newImagePath}/${image}` }}
                  style={styles.image}
                />
              </TouchableOpacity>}
            <View style={[styles.list, styles.cardText]}>
              <Text style={styles.darkText}>{full_name}</Text>
              <Text style={styles.fadeText}>{email}</Text>
              {upload && <Text style={styles.fadeText}>Uploading...</Text>}
            </View>
          </View>

          <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('MyOrder')}>
            <View>
              <View style={styles.cardIcon}>
                <Text style={styles.darkText}>My Orders</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color={color.dark}
                />
              </View>
            </View>
            <View style={styles.cardIcon}>
              <Text style={styles.fadeText}>Already have {totalOrders} orders</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('ShipAddress')}>
            <View>
              <View style={styles.cardIcon}>
                <Text style={styles.darkText}>Shipping Address</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color={color.dark}
                />
              </View>
            </View>
            <View style={styles.cardIcon}>
              <Text style={styles.fadeText}>{addressAvailable} Address</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('SettingProfile')}>
            <View>
              <View style={styles.cardIcon}>
                <Text style={styles.darkText}>Settings</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color={color.dark}
                />
              </View>
            </View>
            <View style={styles.cardIcon}>
              <Text style={styles.fadeText}>Notifications, password</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.list} onPress={() => logout()}>
            <View>
              <View style={styles.cardIcon}>
                <Text style={styles.darkText}>Logout</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color={color.dark}
                />
              </View>
            </View>
            <View style={styles.cardIcon}>
              <Text style={styles.fadeText}>End your session.</Text>
            </View>
          </TouchableOpacity>
        </View>
        : <View style={{
          height: '100%',
        }}>
          <View style={[styles.list, styles.cardText, {flexDirection: 'column'}]}>
            <Text style={styles.darkText}>You must login first to continue.</Text>
            <Text style={
              {
                ...styles.darkText,
                color: color.light,
                backgroundColor: color.primary,
                width: 80,
                padding: 5,
                borderRadius: 20,
                textAlign: 'center',
                marginTop: 5
              }}
              onPress={() => navigation.replace('Auth', {form: 'login'})}
            >Login</Text>
          </View>
          </View>}
    </View>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchProps = {
  get_all_order,
  logout,
  setUpdateUser
};

export default connect(mapStateToProps, mapDispatchProps)(Profile);