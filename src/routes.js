import 'react-native-gesture-handler';
import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Page
import Navbar from './Components/Navbar';
import Auth from './Screens/Auth';
import DetailProduct from './Screens/DetailProduct';

const Stack = createStackNavigator();

const Routes = (props) => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen
            name="Index"
            component={Navbar}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="DetailProduct" component={DetailProduct} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Routes);