import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../Screens/Home';
import Shop from '../../Screens/Shop';
import Bag from '../../Screens/Bag';
import Profile from '../../Screens/Profile';

const Tab = createMaterialBottomTabNavigator();

const Navbar = () => {
    return (
        <>
            <Tab.Navigator
                activeColor='#DB3022'
                inactiveColor='#DADADA'
                barStyle={{ backgroundColor: '#fff' }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        let iconName;
                        switch (route.name) {
                            case 'Home': iconName = 'home-outline'; break;
                            case 'Shop': iconName = 'cart-outline'; break;
                            case 'Bag': iconName = 'lock-closed-outline'; break;
                            case 'Profile': iconName = 'person-outline'; break;
                            default: break;
                        }
                        return <Ionicons name={iconName} size={20} color={color} />;
                    },
                })}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Shop" component={Shop} />
                <Tab.Screen name="Bag" component={Bag} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </>
    );
}

export default Navbar;