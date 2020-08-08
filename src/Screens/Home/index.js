import React from 'react';
import { ImageBackground, Text, ScrollView } from 'react-native';
import { ProductCollection } from '../../Components';
import style from './style';


const Home = () => {
    return (
        <ScrollView style={style.container}>
            {/* HEADER */}
            <ImageBackground
                style={style.header}
                source={require('../../Assets/Images/Home/home_header.png')}>
                <Text style={style.headerText}>Street clothes</Text>
            </ImageBackground>

            {/* PRODUCT COLLECTIONS */}
            <ProductCollection title='new' description='You`ve never seen it before' />
        </ScrollView>
    )
}

export default Home;