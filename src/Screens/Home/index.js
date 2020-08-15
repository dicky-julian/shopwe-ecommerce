import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, ScrollView } from 'react-native';
import { ProductCollection } from '../../Components';
import style from './style';
import { connect } from 'react-redux';
import { createUrlParamFromObj, getResultResponse } from '../../Utils/helper';
import Axios from 'axios';
import { apiUri } from '../../Utils/config';
import { newProducts, popularProducts, initProducts } from '../../Redux/Actions/products/products';

const Home = (props) => {
  const [newProducts, setNewProducts] = useState([])
  const [newProductsLoading, setNewProductsLoading] = useState(false)
  const [popularProducts, setPopularProducts] = useState([])
  const [popularProductsLoading, setPopularProductsLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    props.initProducts();
    getNewProducts()
    getPopularProducts()
  }, [])

  /**
   * APIs
   */
  const getNewProducts = () => {
    setNewProductsLoading(!newProductsLoading);
    const obj = {
      sort_by: 'created_at',
      sort_type: 'desc',
      page: 1,
      limit: 5
    }
    const params = createUrlParamFromObj(obj);
    console.log(`${apiUri.products}${params}`);
    Axios({
      method: 'GET',
      url: `${apiUri.products}${params}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    }).then(res => {
      setNewProductsLoading(!newProductsLoading);
      if (res.status === 200) {
        setNewProducts(getResultResponse(res));
        props.newProducts(getResultResponse(res))
      }
    }).catch(err => {
      setNewProductsLoading(!newProductsLoading);
      console.log(err)
    })
  }
  const getPopularProducts = () => {
    setPopularProductsLoading(!popularProductsLoading);
    const obj = {
      sort_by: 'top_products',
      sort_type: 'desc',
      get: 'popular',
      page: 1,
      limit: 5
    }
    const params = createUrlParamFromObj(obj);
    Axios({
      method: 'GET',
      url: `${apiUri.products}${params}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    }).then(res => {
      setPopularProductsLoading(!popularProductsLoading);
      if (res.status === 200) {
        setPopularProducts(getResultResponse(res));
        props.popularProducts(getResultResponse(res))
      }
    }).catch(err => {
      setPopularProductsLoading(!popularProductsLoading);
      console.log(err)
    })
  }
  return (
    <ScrollView style={style.container}>
      {/* HEADER */}
      <ImageBackground
        style={style.header}
        resizeMode='cover'
        source={require('../../Assets/Images/Home/home_header.jpg')
        }>
        <Text style={style.headerText}>Street clothes</Text>
      </ImageBackground>

      {/* PRODUCT COLLECTIONS */}
      <ProductCollection label={true} title='new' description='You`ve never seen it before' data={newProducts} loading={newProductsLoading}/>
      <ProductCollection label={false} title='popular' description='You`ve never seen it before' data={popularProducts} loading={popularProductsLoading} />
    </ScrollView>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  products: state.products
})

const mapDispatchToProps = {
  initProducts,
  newProducts,
  popularProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);