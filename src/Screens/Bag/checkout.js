import React from 'react';
import { Dimensions, Text, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Card, PaymentCard, Topbar } from '../../Components';
import style from './style';

const Checkout = props => {
    const navigation = useNavigation();
    const dataAddress = {
        name: 'John Doe',
        address: 'Jalan Gempol Marga Bhakti RT 02 RW 10 No. 3, Tanjungrejo, Sukun, Malang 65147'
    }
    return (
      <View>
        <Topbar backNav={true} title="Checkout" />
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{height: Dimensions.get('window').height - 285}}>
            <ScrollView style={style.fullContainer}>
              <Text style={style.subTitleText}>Shipping Address</Text>
              <Card dataAddress={dataAddress} />

              <Text style={style.subTitleText}>Payment</Text>
              <PaymentCard
                name="Mastercard"
                brand={require('../../Assets/Images/Payment/mastercard.png')}
                active={true}
              />
              <PaymentCard
                name="Gopay"
                brand={require('../../Assets/Images/Payment/gopay.jpg')}
                active={false}
              />
              <PaymentCard
                name="Gopay"
                brand={require('../../Assets/Images/Payment/gopay.jpg')}
                active={false}
              />
              <PaymentCard
                name="Gopay"
                brand={require('../../Assets/Images/Payment/gopay.jpg')}
                active={false}
              />
              <View style={{height: 220}}></View>
            </ScrollView>
          </View>
          <View style={{...style.bottomBar, height: 200, bottom: 0}}>
            <View style={style.textContainer}>
              <Text style={style.fadeText}>Order:</Text>
              <Text style={style.darkText}>112$</Text>
            </View>
            <View style={style.textContainer}>
              <Text style={style.fadeText}>Delivery:</Text>
              <Text style={style.darkText}>15$</Text>
            </View>
            <View style={style.textContainer}>
              <Text style={style.fadeText}>Summary:</Text>
              <Text style={style.darkText}>127$</Text>
            </View>
            <Button
              title="Submit Order"
              style="primary"
              type="fullwidth"
              onPress={() => navigation.navigate('ShipAddress')}
            />
          </View>
        </View>
      </View>
    );
}

export default Checkout;