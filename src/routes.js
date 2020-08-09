import 'react-native-gesture-handler';
import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Page
import Navbar from './Components/Navbar';
import Search from './Screens/Search';
import Filter from './Screens/Shop/filter';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Index" component={Navbar} options={{ headerShown: false }} />
                <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
                <Stack.Screen name="Filter" component={Filter} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Routes);