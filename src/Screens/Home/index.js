import React, { useEffect } from 'react';
import { ImageBackground, Text, ScrollView } from 'react-native';
import { ProductCollection } from '../../Components';
import style from './style';

import { connect } from 'react-redux';
import auth from '../../Redux/Reducers/auth';

const Home = (props) => {
    useEffect(() => {
        console.log(props.auth);
      }, [props.auth])

    return (
        <ScrollView style={style.container}>
            {/* HEADER */}
            <ImageBackground
                style={style.header}
                resizeMode='cover'
                source={require('../../Assets/Images/Home/home_header.png')
                }>
                <Text style={style.headerText}>Street clothes</Text>
            </ImageBackground>

            {/* PRODUCT COLLECTIONS */}
            <ProductCollection title='new' description='You`ve never seen it before' />
            <ProductCollection title='popular' description='You`ve never seen it before' />
        </ScrollView>
    )
}


const mapStateToProps = state =>({
    auth: state.auth,
});
  
const mapDispatchToProps = { };
  
export default connect(mapStateToProps,mapDispatchToProps)(Home);