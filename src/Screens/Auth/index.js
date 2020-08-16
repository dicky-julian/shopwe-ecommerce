import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TextInputs, Topbar, Button, Alert} from '../../Components';
import style from './style';
import axios from 'axios';
import {API_URL} from '../../../env';
import {connect} from 'react-redux';
import {login} from '../../Redux/Actions/auth';
import {useNavigation} from '@react-navigation/native';
import {loginSchema, signupSchema} from '../../Utils/valid';
import {ValidationError} from '@hapi/joi';

const Auth = (props) => {
  const navigation = useNavigation();
  const [form, setForm] = useState('');
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();
  const [isSuccess, setSuccess] = useState('');
  const [isError, setError] = useState('');

  const handleSubmitLogin = async () => {
    await setLoading(true);
    const data = {
      email: email,
      password: password,
    };
    try {
      await loginSchema.validateAsync(data);
      axios({
        method: 'POST',
        url: API_URL + '/auth/login',
        data: {
          email: data.email,
          password: data.password
        }
      }).then((res) => {
        setLoading(false)
        setSuccess('Login Success')
        props.login(res.data.data);
        props.navigation.replace('Index');
      }).catch((err) => {
        setLoading(false);
        const errorMessage = err.response.data.message ? err.response.data.message : err.response;
        setError(errorMessage);
        // Alert.alert("Failed!", err.response.data.message, [{ text: "OK" }],{ cancelable: false });
      })
    } catch (error) {
      setLoading(false);
      const errorMessage = error.toString().replace('ValidationError:', '');
      setError(errorMessage)
    }
  };

  const handleSubmitRegister = async () => {
    await setLoading(true);
    const data = {
      fullname: name,
      email: email,
      password: password,
      form: 'signup'
    }
    try {
      await signupSchema.validateAsync(data);
      axios({
        method: 'POST',
        url: API_URL + '/auth/request/otp',
        data: {
          email: email,
          requestType: 'register',
        },
      }).then((res) => {
        setLoading(false);
        console.log(res);
        props.navigation.push('ScreenOtp', {
          fullname: name,
          email: email,
          password: password,
          form: 'signup',
        });
      }).catch((error) => {
        setLoading(false);
        const errorMessage = error.toString().replace('ValidationError:', '');
        setError(errorMessage)
        console.log(error.response)
      })
    } catch (error) {
      setLoading(false);
      const errorMessage = error.toString().replace('ValidationError:', '');
      setError(errorMessage)
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuth();
    if (props.route.params !== undefined) {
      setForm(props.route.params.form);
    } else {
      setForm('signup');
    }
  }, []);

  const checkAuth = () => {
    props.auth.auth.tokenLogin && navigation.navigate('Home');
  };
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
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
          )}
          <View>
            <TextInputs
              title="Email"
              placeholder="Insert Your Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View>
            <TextInputs
              title="Password"
              placeholder="Insert Your Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>

        {form === 'login' ? (
          <View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ForgotPassword')}>
              <Text style={style.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>
            <View style={style.button}>
              {loading ? (
                <Button title="Loading" style="primary" type="fullwidth" />
              ) : (
                <Button
                  title="Login"
                  style="primary"
                  type="fullwidth"
                  onPress={handleSubmitLogin}
                />
              )}
              <Text
                style={{
                  ...style.forgotText,
                  marginTop: 20,
                  marginBottom: 20,
                  textAlign: 'center',
                }}>
                Or
              </Text>
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
            {loading ? (
              <Button title="Loading" style="primary" type="fullwidth" />
            ) : (
              <Button
                title="Sign Up"
                style="primary"
                type="fullwidth"
                onPress={handleSubmitRegister}
              />
            )}
          </View>
        )}

      </View>
      {isSuccess ? <Alert title={isSuccess} type='success' onPress={() => setSuccess()} /> : <></>}
      {isError ? <Alert title={isError} type='failed' onPress={() => setError()} />: <></>}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {login};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
