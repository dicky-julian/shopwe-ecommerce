import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import style from './style';
import {TextInputs, Topbar, Button} from '../../Components';

const ScreenOtp = () => {
  const handleSubmitSend = () => {};
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
              onChangeText={(text) => setForgotPassword(text)}
            />
          </View>

          <View style={style.button}>
            <Button
              title="Login"
              style="primary"
              type="fullwidth"
              onPress={() => handleSubmitSend()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScreenOtp;
