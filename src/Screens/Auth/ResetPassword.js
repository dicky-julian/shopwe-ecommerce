import React, {useState} from 'react';
import {View, Text, ScrollView, Dimensions, Alert} from 'react-native';
import style from './style';
import {TextInputs, Topbar, Button} from '../../Components';
import {color} from '../../Assets/Styles';
import axios from 'axios';
import {API_URL} from '../../../env';
import {resetSchema} from '../../Utils/valid';

const ResetPassword = (props) => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [loading, setLoading] = useState();
  const [isSuccess, setSuccess] = useState('');
  const [isError, setError] = useState('');
  const {email} = props.route.params;

  const handleSubmitSend = async () => {
    await setLoading(true);
    try {
      const data = {
        password1: password1,
        password2: password2
      };
      await resetSchema.validateAsync(data);
      if (password1 !== password2) {
        setLoading(false);
        Alert.alert('Password Not Match!', 'Please match the password.')
        return;
      }
      axios({
        method: 'POST',
        url: API_URL + '/auth/resetpassword',
        data: {
          email: email,
          password: password1,
        },
      }).then((res) => {
        setLoading(false);
        console.log(res);
        Alert.alert('Success!','Your password has been changed!',[{ text: 'OK' }],{ cancelable: false },);
        props.navigation.replace('Auth', { form: 'login' });
      }).catch((err) => {
        setLoading(false);
        console.log(err);
      })
    } catch (err) {
      setLoading(false);
      Alert.alert('Failled!', err.toString(), [{ text: 'OK' }], { cancelable: false });
      console.log(err);
    }
  };
  return (
    <View>
      <Topbar backNav={true} />
      <ScrollView>
        <View style={style.container}>
          <Text style={style.titleText}>Reset Password</Text>
          <Text
            style={{ ...style.darkText, marginBottom: 10, color: color.primary }}>
            You need to change your password to active your account
          </Text>
          <View style={style.textinput}>
            <TextInputs
              title="New Password"
              placeholder="Insert Your Password"
              value={password1}
              onChangeText={(text) => setPassword1(text)}
              secureTextEntry={true}
            />
            <TextInputs
              title="Confirmation New Password"
              placeholder="Insert Your Password"
              value={password2}
              onChangeText={(text) => setPassword2(text)}
              secureTextEntry={true}
            />
          </View>

          <View style={style.button}>
            {loading ? (
              <Button title="Loading" style="primary" type="fullwidth" />
            ) : (
              <Button
                title="Reset Password"
                style="primary"
                type="fullwidth"
                  onPress={() => handleSubmitSend()}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResetPassword;
