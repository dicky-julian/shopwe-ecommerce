import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import TextInputs from '../TextInputs';
import ButtonLarge from '../Button/ButtonsLarge';
import Headline3 from '../Text/Headline3';

const SignUp = () => {
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
  return (
    <View style={styles.container}>
      <View style={styles.headline}>
        <Headline3 title="Sign Up" />
      </View>

      {/* start Card SignUp */}
      <View>
        <View style={styles.cardLogin}>
          <TextInputs title="Name" placeholder="Name" />
        </View>
        <View style={styles.cardLogin}>
          <TextInputs
            title="Email"
            placeholder="Email"
            onChangeText={(text) => validate(text)}
          />
        </View>
        <View style={styles.cardLogin}>
          <TextInputs
            title="Password"
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
      </View>
      {/* end Card SignUp */}

      <Text style={styles.forgotText}>Already have an account?</Text>
      <View style={styles.button}>
        <ButtonLarge
          title="SIGN UP"
          onPress={() => Alert.alert('LoginLarge')}
        />
      </View>
    </View>
  );
};

export default SignUp;

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
