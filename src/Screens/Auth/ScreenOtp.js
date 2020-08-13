import React, { useState, useEffect } from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import style from './style';
import {TextInputs, Topbar, Button} from '../../Components';
import axios from 'axios';
import { API_URL } from '../../../env';

const ScreenOtp = (props) => {
  const [form, setForm] =  useState('');
  const [otp, setOtp] = useState();
  const [loading, setLoading] = useState();

  const handleSubmitSendSignup = async (event) => {
    await setLoading(true);
    event.preventDefault();
    const data = {
      fullname: props.route.params.fullname,
      email: props.route.params.email,
      password: props.route.params.password,
      otp: otp,
    }
    axios({
      method: 'POST',
      url: API_URL + '/auth/register',
      data: {
        full_name: data.fullname,
        email: data.email,
        password: data.password,
        otp: otp,
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
        setLoading(false);
        console.log(res);
        props.navigation.replace('Auth', {form: 'login'});
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        Alert.alert(
          "Failed!",
          err.response.data.message,
          [
            { text: "OK"}
          ],
          { cancelable: false }
        );
    })
  }

  const handleSubmitSendReset = async (event) => {
    await setLoading(true);
    event.preventDefault();
    const data = {
      otp: otp,
    }
    axios({
      method: 'POST',
      url: API_URL + '/auth/confirm/otp',
      data: {
        otp: otp,
      },
    }).then((res) => {
        setLoading(false);
        console.log(res);
        props.navigation.replace('ResetPassword', {email: props.route.params.email});
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        Alert.alert(
          "Failed!",
          "OTP is not valid!",
          [
            { text: "OK"}
          ],
          { cancelable: false }
        );
    })
  }

  useEffect(() => {
    setForm(props.route.params.form)
  }, [])

  return (
    <View>
      <Topbar backNav={true} />
        <ScrollView>
        <View style={style.container}>
          <Text style={style.titleText}>Verification OTP</Text>
          <Text style={{marginBottom: 20}}>
            The verification code has been sent via email to herena@email.com
          </Text>
          <Text>Please wait 1231 seconds to resend</Text>
          <View style={style.textinput}>
            <TextInputs
              title="Code OTP"
              placeholder="Insert Your Code OTP"
              value={otp}
              onChangeText={(text) => setOtp(text)}
            />
          </View>

          {form === 'signup' ? (
          <View style={style.button}>
            {loading ? (
              <Button
              title="Loading"
              style="primary"
              type="fullwidth"
              />
            )
            :(
              <Button
              title="Confirm"
              style="primary"
              type="fullwidth"
              onPress={handleSubmitSendSignup}
              />
            )}
          </View>
          )
          :
          (
          <View style={style.button}>
            {loading ? (
              <Button
              title="Loading"
              style="primary"
              type="fullwidth"
              />
            )
            :(
              <Button
              title="Confirm"
              style="primary"
              type="fullwidth"
              onPress={handleSubmitSendReset}
              />
            )}
          </View>
          )}
        </View>
      </ScrollView>
      </View>
  );
};

export default ScreenOtp;
