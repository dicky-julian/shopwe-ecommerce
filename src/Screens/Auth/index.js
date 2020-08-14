import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {TextInputs, Topbar, Button} from '../../Components';
import style from './style';
import axios from 'axios';
import {API_URL} from '../../../env';
import {connect} from 'react-redux';
import {login} from '../../Redux/Actions/auth';
import {useNavigation} from '@react-navigation/native';
import {loginSchema, signupSchema} from '../../Utils/valid';

const Auth = (props) => {
  const navigation = useNavigation();
  const [form, setForm] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [loading, setLoading] = useState();

  const handleValidate = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      // show error function (alert)
      return false;
    }
    return true;
  };

  const handleSubmitLogin = async () => {
    await setLoading(true);
    const data = {
      email: email,
      password: password,
    };

    try {
      await loginSchema.validateAsync(data);
    } catch (error) {
      console.log(error);
    }
    try {
      const res = await axios({
        method: 'POST',
        url: API_URL + '/auth/login',
        data: {
          email: data.email,
          password: data.password,
        },
      });
      setLoading(false);
      props.login(res.data.data);
      props.navigation.replace('Index');
      return res;
    } catch (err) {
      setLoading(false);
      console.log(err);
      console.log(err.response);
      Alert.alert('Failed!', err.response.data.message, [{text: 'OK'}], {
        cancelable: false,
      });
    }
  };

  // const handleSubmitLogin = async () => {
  //   await setLoading(true);
  //   const data = {
  //     email: email,
  //     password: password
  //   }
  //   axios({
  //     method: 'POST',
  //     url: API_URL + '/auth/login',
  //     data: {
  //       email: data.email,
  //       password: data.password
  //     },
  //   }).then((res) => {
  //       setLoading(false)
  //       props.login(res.data.data);
  //       props.navigation.replace('Index');
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       console.log(err)
  //       console.log(err.response);
  //       Alert.alert(
  //         "Failed!",
  //         err.response.data.message,
  //         [
  //           { text: "OK"}
  //         ],
  //         { cancelable: false }
  //       );
  //   })
  // }
  
  const handleSubmitRegister = async () => {
    await setLoading(true);
    const data = {
      email: email,
      requestType: 'register',
    };
    try {
      await signupSchema.validateAsync(data);
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
      props.navigation.push('ScreenOtp', {
        fullname: name,
        email: email,
        password: password,
        form: 'signup',
      });
      // })
      return res
    } catch (err) {
      setLoading(false);
      console.log(err);
      Alert.alert('Failed!', 'Register failed!', [{text: 'OK'}], {
        cancelable: false,
      });
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
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {login};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
