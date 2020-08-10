import 'react-native-gesture-handler';
import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Page
import Navbar from './Components/Navbar';
// Shop Screen
import Search from './Screens/Search';
import Filter from './Screens/Shop/filter';
// Auth Screen
import Auth from './Screens/Auth';
import DetailProduct from './Screens/DetailProduct';
// My Bag Screen
import MyOrder from './Screens/MyOrders';
import ShipAddress from './Screens/Bag/shipingAddress';
import Checkout from './Screens/Bag/checkout';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Checkout">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Index"
          component={Navbar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyOrder"
          component={MyOrder}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShipAddress"
          component={ShipAddress}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Routes);