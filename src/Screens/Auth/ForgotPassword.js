import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
import {TextInputs, Topbar, Button} from '../../Components';

const ForgotPassword = () => {
  const handleSubmitSend = () => {};
  return (
    <View>
      <Topbar backNav={true} />
      <View style={style.container}>
        <Text style={style.titleText}>Forgot Password</Text>
        <Text>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        <View style={style.textinput}>
           <TextInputs
          title="Email"
          placeholder="Insert Your Email"
          onChangeText={(text) => setForgotPassword(text)}
        />
        </View>
       
        <View style={style.button}>
          <Button
            title="Send"
            style="primary"
            type="fullwidth"
            onPress={() => handleSubmitSend()}
          />
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
