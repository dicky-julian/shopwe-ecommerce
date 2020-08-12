import React, {useState} from 'react';
import {Text, TouchableOpacity, ScrollView, View, Modal, Alert} from 'react-native';
import {Button, TextInputs, DateTimeInputs, Topbar} from '../../Components';
import style from './style';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {color} from '../../Assets/Styles/colors';

const Setting = (props) => {
  const [date, setDate] = useState(new Date());
  const [modalVisiblePassword, setModalVisiblePassword] = useState(false);
  const [activePass, setActivePass] = useState('');
  const [profil, setProfil] = useState('');

  // const [full_name, setName] = useState('');
  // const [password, setPassword] = useState('');

  // useEffect(() => {
  // }, [])

  // const submitSetting = () =>{
  //     data ={

  //     }
  //     AsyncStorage.getItem(){

  //     }
  // }

  const handleSetPassword = () => {
    setActivePass();
    setModalVisiblePassword(false);
  };


  return (
    <View style={{flex: 1}}>
      <Topbar backNav={true} title="Checkout" />
      <View style={{flex: 1}}>
        <View style={style.container}>
          <ScrollView>
            <View style={{marginBottom: 20}}>
              <Text style={style.headText}>Profile</Text>
              <Text
                style={{...style.darkText, marginTop: 25, marginBottom: 25}}>
                Personal Information
              </Text>
              <TextInputs
                title="Fullname"
                placeholder="Insert Your Fullname"
                value=""
                onChangeText={(text) => setName(text)}
              />
              <DateTimeInputs
                title="Date of Birth"
                placeholder="Insert Your Date of Birth"
                date={date}
                onDateChange={(date) => setDate(date)}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    ...style.darkText,
                    marginTop: 25,
                    marginBottom: 25,
                  }}>
                  Password
                </Text>
                <TouchableOpacity onPress={() => setModalVisiblePassword(true)}>
                  <Text
                    style={{
                      ...style.darkText,
                      color: color.primary,
                      marginTop: 25,
                      marginBottom: 25,
                    }}>
                    Change
                  </Text>
                </TouchableOpacity>
              </View>

              <TextInputs
                title="Password"
                placeholder="Insert Your Password"
                value=""
                onChangeText={(text) => setName(text)}
              />
            </View>
            <Button
              title="Save Profile"
              style="primary"
              type="fullwidth"
              onPress={() => navigation.navigate('ShipStatus')}
            />
          </ScrollView>
        </View>
      </View>

      {/* start modal size */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblePassword}>
        <TouchableOpacity
          style={style.modalFade}
          onPress={() => setModalVisiblePassword(false)}></TouchableOpacity>
        <View style={style.modalContainer}>
          <View style={style.scrollTit}></View>
          <Text style={style.titleText}>Password Change</Text>
          <ScrollView>
            <View style={style.modalsCard}>
              <TextInputs
                title="Old Password"
                placeholder="Insert Your Old Password"
                value=""
                onChangeText={(text) => setName(text)}
              />
              <TouchableOpacity onPress={() => Alert.alert('hi')}>
                <Text style={{marginBottom: 5, textAlign: 'right'}}>
                  Forgot Password
                </Text>
              </TouchableOpacity>

              <TextInputs
                title="New Password"
                placeholder="Insert Your New Password"
                value=""
                onChangeText={(text) => setName(text)}
              />
              <TextInputs
                title="Repeat New Password"
                placeholder="Insert Your Repeat New Password"
                value=""
                onChangeText={(text) => setName(text)}
              />

              <Button
                title="Save Profile"
                style="primary"
                type="fullwidth"
                onPress={() => navigation.navigate('ShipStatus')}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
      {/* end modal size */}
    </View>
  );
};

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

export default Setting;
// connect(mapStateToProps, mapDispatchProps)(Setting);
