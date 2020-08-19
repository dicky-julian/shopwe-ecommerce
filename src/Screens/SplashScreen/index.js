import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style';

const SplashScreen = () => {
    return (
      <View style={style.container}>
        <Image
          source={require('../../Assets/Images/Splash/Vector.png')}
          style={style.image}
        />
        <Text style={style.text}>Shopwe</Text>
      </View>
    );
}

export default SplashScreen
