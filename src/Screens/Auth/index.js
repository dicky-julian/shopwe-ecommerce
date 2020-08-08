import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Login from '../../Components/Auth/Login';
import SignUp from '../../Components/Auth/SignUp';

const Auth = () => {
  const [status, setStatus] = useState(1);

  if (status == 1) {
    return (
      <View>
        <Login />
      </View>
    );
  } else {
    return (
      <View>
        <SignUp />
      </View>
    );
  }
};

export default Auth;
