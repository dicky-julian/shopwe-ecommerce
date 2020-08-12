import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import {Topbar, Card} from '../../Components';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {get_all_order} from '../../Redux/Action/order';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'

const MyOrder = (props) => {
  const navigation = useNavigation();
  // const [order, setOrder] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('token', (error, result) => {
      axios({
        method: 'GET',
        url: `http://192.168.1.2:3000/shopwe/api/v1/users/3/orders`,
        headers: {
          // Authorization: result,
          'Content-Type': 'application/json'
        },
      })
        .then((res) => {
          props.get_all_order(res)
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);

  return (
    <View>
      <Topbar backNav={true} search={true} />
      <ScrollView style={styles.cardOrder}>
        <View style={styles.box}>
          <View style={styles.headline}>
            <Text style={styles.headText}>My Orders </Text>
          </View>
          <View>
            {props.order.data.map((data, index) => (
             
                <TouchableOpacity key={index}>
                  {/* {console.log(data.order_id, 'data')} */}
                  <Card
                    dataOrder={data}
                    onPress={() =>
                      navigation.navigate('OrderDetail', {...data})
                    }
                  />
                </TouchableOpacity>
             
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  // auth: state.auth,
  order: state.order,
});

const mapDispatchProps = {get_all_order};

export default connect(mapStateToProps, mapDispatchProps)(MyOrder);
