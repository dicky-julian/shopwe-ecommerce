import 'react-native-gesture-handler';
import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Page
import Navbar from './Components/Navbar';
import Auth from './Screens/Auth';
import DetailProduct from './Screens/DetailProduct';
import MyOrder from './Screens/MyOrders';
import Checkout from './Screens/Checkout';
import ShipAddress from './Screens/ShipAddress';

const Stack = createStackNavigator();

const Routes = (props) => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="DetailProduct">
          <Stack.Screen
            name="Index"
            component={Navbar}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="MyOrder" component={MyOrder} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="ShipAddress" component={ShipAddress} />
          <Stack.Screen name="DetailProduct" component={DetailProduct} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Routes);