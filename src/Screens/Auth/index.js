import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInputs, Topbar, Button } from '../../Components';
import style from './style';

const Auth = () => {
  const [form, setForm] = useState('signup');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  const handleValidate = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      // show error function (alert)
      return false;
    } return true;
  };

  const handleSubmitLogin = () => {

  }

  const handleSubmitRegister = () => {

  }

  return (
    <>
      <Topbar backNav="Index" />
      <View style={style.container}>
        <View>
          <Text style={style.titleText}>
            {form === 'login' ? 'Login' : 'Signup'}
          </Text>
          {form === 'login' ? (
            <></>
          ) : (
              <View>
                <TextInputs
                  title="Name"
                  placeholder="Insert Your Name"
                  onChangeText={(text) => setName(text)}
                />
              </View>
            )}
          <View>
            <TextInputs
              title="Email"
              placeholder="Insert Your Email"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View>
            <TextInputs
              title="Password"
              placeholder="Insert Your Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>

        {form === 'login' ? (
          <View>
            <TouchableOpacity>
              <Text style={style.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>
            <View style={style.button}>
              <Button
                title="Login"
                style="primary"
                type="fullwidth"
                onPress={() => handleSubmitLogin()}
              />
              <Text style={{ ...style.forgotText, marginTop: 20, marginBottom: 20, textAlign: 'center' }}>Or</Text>
              <Button
                title="Create new account"
                type="fullwidth"
                onPress={() => setForm('signup')}
              />
            </View>
          </View>
        ) : (
            <View>
              <TouchableOpacity onPress={() => setForm('login')}>
                <Text style={style.forgotText}>Already have an account?</Text>
              </TouchableOpacity>
              <Button
                title="Sign Up"
                style="primary"
                type="fullwidth"
                onPress={() => handleSubmitRegister()}
              />
            </View>
          )}
      </View>
    </>
  );
};

export default Auth;
