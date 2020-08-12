import React from 'react';
import { Image, Text, ScrollView, View } from 'react-native';
import { Button, ProductOrder, Topbar } from '../../Components';
import style from './style';

const OrderDetail = () => {
    return (
        <View>
            <Topbar backNav={true} search={true} title='Order Details' />
            <ScrollView style={style.fullContainer}>
                <View>
                    {/* TRANSACTION DETAIL */}
                    <View style={style.detailContainer}>
                        <View>
                            <Text style={style.titleText}>Order No1947825</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                                <Text style={style.fadeText}>Tracking Number: </Text>
                                <Text style={style.darkText}> IW319323W42S</Text>
                            </View>
                            <Text style={style.darkText}>3 Items</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={style.fadeText}>05-12-2019</Text>
                            <Text style={style.successText}>Delivered</Text>
                        </View>
                    </View>

                    {/* PRODUCT DETAIL */}
                    <ProductOrder />
                    <ProductOrder />
                    <ProductOrder />

                    {/* ORDER DETAIL */}
                    <Text style={{ ...style.titleText, marginTop: 20 }}>Order Information</Text>
                    <View style={style.textContainer}>
                        <Text style={{ ...style.fadeText, width: '35%' }}>Shipping Address</Text>
                        <Text style={{ ...style.darkText, width: '65%' }}>Jalan Gempol Marga Bhakti RT 02 RW 10 No. 3, Tanjungrejo, Kec. Sukun, Kota Malang, Jawa Timur 65147</Text>
                    </View>
                    <View style={style.textContainer}>
                        <Text style={{ ...style.fadeText, width: '35%' }}>Payment Method</Text>
                        <View style={style.paymentContainer}>
                            <Image
                                source={require('../../Assets/Images/Payment/mastercard.png')}
                                style={style.paymentImage} />
                            <Text style={{ ...style.darkText, width: '65%' }}>*** *** *** 6543</Text>
                        </View>
                    </View>
                    <View style={style.textContainer}>
                        <Text style={{ ...style.fadeText, width: '35%' }}>Delivery Method</Text>
                        <Text style={{ ...style.darkText, width: '65%' }}>FedEx, 3 days, 15$</Text>
                    </View>
                    <View style={style.textContainer}>
                        <Text style={{ ...style.fadeText, width: '35%' }}>Discount</Text>
                        <Text style={{ ...style.darkText, width: '65%' }}>10%, Personal promo code</Text>
                    </View>
                    <View style={style.textContainer}>
                        <Text style={{ ...style.fadeText, width: '35%' }}>Total Amount</Text>
                        <Text style={{ ...style.darkText, width: '65%' }}>133$</Text>
                    </View>

                    <View style={{...style.detailContainer, marginTop: 30, marginBottom: 35}}>
                        <Button title='Reorder' />
                        <Button title='Leave Feedback' style='primary' />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default OrderDetail;