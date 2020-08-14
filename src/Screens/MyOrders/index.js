import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import {Topbar, Card} from '../../Components';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {get_all_order} from '../../Redux/Action/order';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import { API_URL } from '../../../env';

const MyOrder = (props) => {
  const navigation = useNavigation();
  const {
    tokenLogin,
    id
  } = props.auth.auth;
  useEffect(() => {
    AsyncStorage.getItem('token', (error, result) => {
      axios({
        method: 'GET',
        url: `${API_URL}/users/${id}/orders`,
        headers: {
          Authorization: tokenLogin,
          'Content-Type': 'application/json'
        },
      })
        .then((res) => {
          console.log(res, 'ini result')
          props.get_all_order(res)
        })
        .catch((error) => {
          console.log(error.response);
        });
    });
  }, []);

  return (
    <View>
      <Topbar backNav={true} search={true} />
      <ScrollView style={styles.cardOrder} contentContainerStyle={{paddingBottom: 50}} >
        <View style={styles.box}>
          <View style={styles.headline}>
            <Text style={styles.headText}>My Orders </Text>
          </View>
          <View>
            {props.order.data 
              ? props.order.data.length > 0
                ? props.order.data.map((data, index) => (

                  <TouchableOpacity key={index}>
                    {/* {console.log(data.order_id, 'data')} */}
                    <Card
                      dataOrder={data}
                      onPress={() =>
                        navigation.navigate('OrderDetail', { ...data })
                      }
                    />
                  </TouchableOpacity>
                ))
                : <Text>No Data</Text>
              : <Text>No Data</Text>
             
            }
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  order: state.order,
});

const mapDispatchProps = {get_all_order};

export default connect(mapStateToProps, mapDispatchProps)(MyOrder);
