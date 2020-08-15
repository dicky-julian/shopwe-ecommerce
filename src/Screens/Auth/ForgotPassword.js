import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import style from './style';
import {TextInputs, Topbar, Button} from '../../Components';
import axios from 'axios';
import {API_URL} from '../../../env';
import {forgotSchema} from '../../Utils/valid';

const ForgotPassword = (props) => {
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState();

  const handleSubmitSend = async () => {
    await setLoading(true);
    const data = {
      email: email,
      requestType: 'resetPassword',
    };
    try {
      await forgotSchema.validateAsync(data);
    } catch (error) {
      console.log(error);
    }
    try {
      const res = await axios({
        method: 'POST',
        url: API_URL + '/auth/request/otp',
        data: {
          email: data.email,
          requestType: data.requestType,
        },
      });
      // .then((res) => {
      setLoading(false);
      console.log(res);
      props.navigation.push('ScreenOtp', {email: email, form: 'resetpassword'});
      // })
      return res;
    } catch (err) {
      setLoading(false);
      console.log(err);
      Alert.alert('Failed!', err.response.data.message, [{text: 'OK'}], {
        cancelable: false,
      });
    }
    // axios({
    //   method: 'POST',
    //   url: API_URL + '/auth/request/otp',
    //   data: {
    //     email: data.email,
    //     requestType: data.requestType,
    //   },
    // })
    //   .then((res) => {
    //     setLoading(false);
    //     console.log(res);
    //     props.navigation.push('ScreenOtp', {
    //       email: email,
    //       form: 'resetpassword',
    //     });
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     console.log(err);
    //     Alert.alert('Failed!', err.response.data.message, [{text: 'OK'}], {
    //       cancelable: false,
    //     });
    //   });
  };
  return (
    <View>
      <Topbar backNav={true} />
      <View style={style.container}>
        <Text style={style.titleText}>Forgot Password</Text>
        <Text
          style={{ ...style.darkText, marginTop: 25, marginBottom: 25 }}>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        <View style={style.textinput}>
          <TextInputs
            title="Email"
            placeholder="Insert Your Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={style.button}>
          {loading ? (
            <Button title="Loading" style="primary" type="fullwidth" />
          ) : (
            <Button
              title="Send"
              style="primary"
              type="fullwidth"
              onPress={handleSubmitSend}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
