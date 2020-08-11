import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import style from './style';
import {TextInputs, Topbar, Button} from '../../Components';
import { color } from '../../Assets/Styles';

const ResetPassword = () => {
  const handleSubmitSend = () => {};
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
              onChangeText={(text) => setOtp(text)}
            />
            <TextInputs
              title="Confirmation New Password"
              placeholder="Insert Your Password"
              onChangeText={(text) => setOtp(text)}
            />
          </View>

          <View style={style.button}>
            <Button
              title="Reset Password"
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

export default ResetPassword;
