import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextInputs from '../TextInputs';
import ButtonLarge from '../Button/ButtonsLarge';
import Headline3 from '../Text/Headline3';

const Login = () => {
  const [logins, setLogins] = useState({});

  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      setLogins({email: text});
      return false;
    } else {
      setLogins({email: text});
      console.log('Email is Correct');
    }
  };

  const handleLogin = () => {
    if (logins.email == '') {
      setLogins(() => ({nameError: 'Email name required.'}));
    } else {
      setLogins(() => ({nameError: null}));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headline}>
        <Headline3 title="Login" />
      </View>

      {/* start Card Login */}
      <View>
        <View style={styles.cardLogin}>
          <TextInputs
            title="Email"
            placeholder="Email"
            onChangeText={(text) => validate(text)}
          />
          {!!logins.nameError && (
            <Text style={{color: 'red'}}>{logins.nameError}</Text>
          )}
        </View>
        <View style={styles.cardLogin}>
          <TextInputs title="Password" placeholder="Password" secureTextEntry={true}/>
        </View>
      </View>
      {/* end Card Login */}

      <Text style={styles.forgotText}>Forgot your password?</Text>
      <View style={styles.button}>
        <ButtonLarge
          title="LOGIN"
          onPress={() => {
            handleLogin();
          }}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  headline: {
    marginBottom: 80,
  },
  cardLogin: {
    marginBottom: 5,
  },
  forgotText: {
    textAlign: 'right',
  },
  button: {
    marginTop: 20,
  },
});
