import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, ScrollView, View, Modal} from 'react-native';
import {Button, TextInputs, DateTimeInputs, Topbar, Alert} from '../../Components';
import style from './style';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { color } from '../../Assets/Styles/colors';
import moment from 'moment';
import Axios from 'axios';
import { API_URL } from '../../../env';
import { profileSchema, changePassSchema, resetPasswordSchema } from '../../Utils/valid';
import { object } from '@hapi/joi';

const Setting = (props) => {
  const {id, tokenLogin, full_name, birth, email, created_at} = props.auth.auth;
  const [date, setDate] = useState(new Date(birth));
  const [name, setName] = useState(full_name);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');
  const [modalVisiblePassword, setModalVisiblePassword] = useState(false);
  const [activePass, setActivePass] = useState('');
  const [profil, setProfil] = useState('');
  const [isSuccess, setSuccess] = useState('');
  const [isError, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
  }, [])
  
  const handleSetPassword = () => {
    setActivePass();
    setModalVisiblePassword(false);
  };

  const formatDate = (dates) => {
    return new Date(moment(dates).toISOString());
  }
  
  /**
   * API Services
   */
  // const updateUser = () => {
  //   setIsLoading(true)
  //   const data = {
  //     full_name: name,
  //     birth: moment(date).format('YYYY-MM-DD')
  //   }
  //   if (name === full_name) delete data.full_name;
  //   Axios({
  //     method: 'PATCH',
  //     url: `${API_URL}/users/${id}`,
  //     data: data,
  //     headers: {
  //       Authorization: tokenLogin,
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((res) => {
  //     setIsLoading(false)
  //     Alert.alert('Profile Updated!', 'Your profile updated succesfully.');
  //     console.log(res, 'ini result')
  //   }).catch((error) => {
  //     setIsLoading(false)
  //     console.log(error.response)
  //     if (error.response.data.message) Alert.alert('Update Profile Failed!', error.response.data.message.replace('birth', 'Date of Birth '));
  //   });
  // }

  const updateUser = async () => {
    setIsLoading(true);
    let message = [];
    const data = {
      full_name: name,
      birth: moment(date).format('YYYY-MM-DD'),
    };

    try {
      await profileSchema.validateAsync(data);
      if (name === full_name) delete data.full_name;
      Axios({
        method: 'PATCH',
        url: `${API_URL}/users/${id}`,
        data: data,
        headers: {
          Authorization: tokenLogin,
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        setIsLoading(false);
        message.push('Your profile updated succesfully.');
        setError('');
        setSuccess(message);
      }).catch((error) => {
        setIsLoading(false);
        console.log(error.response);
        if (error.response.data.message)
          message.push('Your profile failed to update.' + error.response.data.message.replace('birth', 'Date of Birth '));
          setError(message);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      message.push(error.toString().replace('ValidationError:', ''));
      setError(message)
    }
  };

  const updatePassword = async () => {
    setIsLoading(true)
    let message = [];

    // start replace
    if (password.length < 1) {
      setIsLoading(false);
      message.push('Old Password Couldn\'t To Be Empty!.');
    }
    if (newPassword.length < 1) {
      setIsLoading(false);
      message.push('New Password Couldn\'t To Be Empty!.');
    }
    if (repeatNewPassword.length < 1) {
      setIsLoading(false);
      message.push('Repeat Password Couldn\'t To Be Empty!.');
    }  

    if (newPassword !== repeatNewPassword) {
      setIsLoading(false);
      message.push('Password Not Match!. Please match the password.')
    }

    if (message.length > 0) {
      setError(message);
      return;
    } 

    try {
      const data = {
        password,
        newPassword,
        repeatNewPassword
      }
      await resetPasswordSchema.validateAsync(data);
      
      const data2 = {
        id: id,
        password: password,
        new_password: newPassword
      }
      Axios({
        method: 'POST',
        url: `${API_URL}/auth/resetpassword`,
        data: data2,
        headers: {
          Authorization: tokenLogin,
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        setIsLoading(false)
        setError('');
        message.push('Profile Updated!. Your password updated succesfully.')
        setSuccess(message)
        console.log(res, 'ini result')
      }).catch((error) => {
        setIsLoading(false)
        if (error.response.data.message) message.push('Update Password Failed!.' + error.response.data.message.replace('birth', 'Date of Birth '));
        setError(message);
        console.log(error.response)
      });
    } catch (error) {
      setIsLoading(false);
      message.push(error.toString().replace('ValidationError:', ''));
      setError(message)  
    }
  }

  const toResetPassword = () => {
    setModalVisiblePassword(false);
    props.navigation.navigate('ForgotPassword', {email:email});
  }
  return (
    <View style={{flex: 1}}>
      <Topbar backNav={true} title="Profile Setting" />
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
                value={name}
                onChangeText={(text) => setName(text)}
              />
              <DateTimeInputs
                title="Date of Birth"
                placeholder="Insert Your Date of Birth"
                date={date}
                onDateChange={(date) => setDate(formatDate(date))}
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
                onFocus={() => setModalVisiblePassword(true)}
                value=""
                onChangeText={() => setModalVisiblePassword(true)}
              />
            </View>
            {isLoading
              ? <Button
                title="Loading..."
                style="primary"
                type="fullwidth"
                onPress={() => console.log('')}
              />
              : <Button
                title="Save Profile"
                style="primary"
                type="fullwidth"
                onPress={() => updateUser()}
              />}
          </ScrollView>
        </View>
      </View>

      {/* start modal reset password */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblePassword}>
        <TouchableOpacity
          style={style.modalFade}
          onPress={() => setModalVisiblePassword(false)}>
          {isSuccess ? <Alert title={isSuccess} type='success' onPress={() => setSuccess()} /> : <></>}
          {isError ? <Alert title={isError} type='failed' onPress={() => setError()} /> : <></>}
          </TouchableOpacity>
        <View style={style.modalContainer}>
          <View style={style.scrollTit}></View>
          <Text style={style.titleText}>Password Change</Text>
          <ScrollView>
            <View style={style.modalsCard}>
              <TextInputs
                title="Old Password"
                placeholder="Insert Your Old Password"
                value={password}
                secureTextEntry={true}
                autoFocus={true}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity onPress={() => toResetPassword()}>
                <Text style={{marginBottom: 5, padding: 5, textAlign: 'right'}}>
                  Forgot Password
                </Text>
              </TouchableOpacity>

              <TextInputs
                title="New Password"
                placeholder="Insert Your New Password"
                value={newPassword}
                secureTextEntry={true}
                onChangeText={(text) => setNewPassword(text)}
              />
              <TextInputs
                title="Repeat New Password"
                placeholder="Insert Your Repeat New Password"
                value={repeatNewPassword}
                secureTextEntry={true}
                onChangeText={(text) => setRepeatNewPassword(text)}
              />

              <Button
                title="Save Profile"
                style="primary"
                type="fullwidth"
                onPress={() => updatePassword()}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
      {/* end modal size */}
      {isSuccess ? <Alert title={isSuccess} type='success' onPress={() => setSuccess()} /> : <></>}
      {isError ? <Alert title={isError} type='failed' onPress={() => setError()} /> : <></>}
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
