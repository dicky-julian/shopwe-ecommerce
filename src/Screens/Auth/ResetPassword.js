import React, { useState } from 'react';
import {View, Text, ScrollView, Dimensions, Alert} from 'react-native';
import style from './style';
import {TextInputs, Topbar, Button} from '../../Components';
import { color } from '../../Assets/Styles';
import axios from 'axios';
import { API_URL } from '@env';

const ResetPassword = (props) => {
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();

  const handleSubmitSend = async (event) => {
    await setLoading(true);
    event.preventDefault();
    const data = {
      email: props.route.params.email,
      password: password
    }
    axios({
      method: 'POST',
      url: API_URL + '/auth/resetpassword',
      data: {
        email: data.email,
        password: data.password,
      },
    }).then((res) => {
        setLoading(false);
        console.log(res);
        Alert.alert(
          "Success!",
          "Your password has been changed!",
          [
            { text: "OK"}
          ],
          { cancelable: false }
        );
        props.navigation.replace('Auth', {form: 'login'});
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        Alert.alert(
          "Failled!",
          "Reset password failed!",
          [
            { text: "OK"}
          ],
          { cancelable: false }
        );
    })
  };
  return (
    <View>
      <Topbar backNav={true} />
      <ScrollView>
        <View style={style.container}>
          <Text style={style.titleText}>Reset Password</Text>
          <Text
            style={{textAlign: 'justify', color: color.primary, fontSize: 16}}>
            You need to change your password to active your account
          </Text>
          <View style={style.textinput}>
            <TextInputs
              title="New Password"
              placeholder="Insert Your Password"
            />
            <TextInputs
              title="Confirmation New Password"
              placeholder="Insert Your Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          
          <View style={style.button}>
            {loading ? (
              <Button
              title="Loading"
              style="primary"
              type="fullwidth"
              />
            )
            :
            (
              <Button
              title="Reset Password"
              style="primary"
              type="fullwidth"
              onPress={handleSubmitSend}
              />
            )}
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResetPassword;
