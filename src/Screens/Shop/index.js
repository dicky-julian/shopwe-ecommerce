import React, { useState, useEffect } from 'react';
import { Dimensions, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Topbar, Product } from '../../Components';
import style from './style';
import { color } from '../../Assets/Styles';
import { connect } from 'react-redux';
import { allProducts, setSort, clearProducts, setSearch } from '../../Redux/Actions/products/products';
import Axios from 'axios';
import { createUrlParamFromObj, getResultResponse } from '../../Utils/helper';
import { apiUri } from '../../Utils/config';

const Shop = (props) => {
  const { search } = props.products;
  const [allProducts, setAllProducts] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [activeSort, setActiveSort] = useState('Newest');
  const sortActionList = ['Popular', 'Newest', 'Price: Lowest to high', 'Price: Highest to low']
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [lastPage, setLastPage] = useState(false)
  const [filters, setFilters] = useState(props.products.filters)
  const [isFiltered, setIsFiltered] = useState(false)
  const [sorts, setSorts] = useState(props.products.sort)
  const [isSorted, setIsSorted] = useState(false)
  const navigation = useNavigation();
  const handleSetSort = (list) => {
    setActiveSort(list);
    setModalVisible(false);
  }

  /**
   * Life Cycles
   */
  useEffect(() => {
    resetScreen();
    getAllProducts()
  }, [])

  useEffect(() => {
    if (search !== undefined && search.length > 2) {
      console.log(props.products)
      getFilteredProducts();
    }
  }, [search])

  useEffect(() => {
    setSort();
  }, [activeSort])

  useEffect(() => {
    resetScreen();
    if (props.products.filters !== filters) {
      setIsFiltered(true);
      getFilteredProducts();
      setFilters(props.products.filters)
    }
  }, [props.products.filters])

  useEffect(() => {
    resetScreen();
    if (props.products.sort !== sorts) {
      setIsSorted(true);
      getFilteredProducts();
      setSorts(props.products.sort)
    }
  }, [props.products.sort])

  /**
   * APIs
   */
  // get all products
  const getAllProducts = () => {
    const obj = {
      sort_by: 'created_at',
      sort_type: 'asc',
      page: page + 1,
      limit: limit
    }
    const params = createUrlParamFromObj(obj);
    console.log(params, 'getAllProducts')
    Axios({
      method: 'GET',
      url: `${apiUri.products}${params}`,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status === 200) {
        setAllProducts(getResultResponse(res));
      }
    }).catch(err => {
      console.log(err)
    })
  }
  const getMoreProducts = () => {
    setPage(page + 1);
    const obj = {
      sort_by: 'created_at',
      sort_type: 'asc',
      page: page + 1,
      limit: limit
    }
    const params = createUrlParamFromObj(obj);
    console.log(params, 'getMoreProducts');
    Axios({
      method: 'GET',
      url: `${apiUri.products}${params}`,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status === 200) {
        if (getResultResponse(res).length > 0) {
          const moreProducts = [...allProducts, ...getResultResponse(res)];
          setAllProducts(moreProducts);
        } else {
          setPage(page - 1);
          setLastPage(true)
        }
      }
    }).catch(err => {
      console.log(err)
    })
  }
  // get filtered products
  const getFilteredProducts = () => {
    const sanitizedFilters = sanitizeFilters();
    let obj = {};
    search && search.length > 0
      ? obj = {
        ...props.products.sort,
        search: search,
        page: page + 1,
        limit: limit,
        ...sanitizedFilters
      }
      : obj = {
        ...props.products.sort,
        page: page + 1,
        limit: limit,
        ...sanitizedFilters
      }
    console.log(obj)
    const params = createUrlParamFromObj(obj);
    console.log(params, 'getFilteredProducts');
    Axios({
      method: 'GET',
      url: `${apiUri.products}${params}`,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status === 200) {
        truncateProducts();
        console.log(getResultResponse(res).length)
        if (getResultResponse(res).length > 0) {
          setAllProducts(getResultResponse(res));
        }
      }
    }).catch(err => {
      console.log(err)
    })
  }
  const getMoreFilteredProducts = () => {
    setPage(page + 1);
    const sanitizedFilters = sanitizeFilters();
    let obj = {};
    search && search.length > 0
      ? obj = {
        ...props.products.sort,
        search: search,
        page: page + 1,
        limit: limit,
        ...sanitizedFilters
      } 
      : obj = {
        ...props.products.sort,
        page: page + 1,
        limit: limit,
        ...sanitizedFilters
      }
    const params = createUrlParamFromObj(obj);
    console.log(params, 'getFilteredProducts');
    Axios({
      method: 'GET',
      url: `${apiUri.products}${params}`,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status === 200) {
        if (getResultResponse(res).length > 0) {
          const moreProducts = [...allProducts, ...getResultResponse(res)];
          setAllProducts(moreProducts);
        } else {
          setPage(page - 1);
          setLastPage(true)
        }
      }
    }).catch(err => {
      console.log(err)
    })
  }

  /**
   * Logics
   */
  const setSort = () => {
    switch (activeSort) {
      case 'Popular':
        resetScreen();
        props.setSort({
          sort_by: 'top_products',
          sort_type: 'desc',
          get: 'popular'
        });
        break;
      case 'Newest':
        resetScreen();
        props.setSort({
          sort_by: 'created_at',
          sort_type: 'asc',
          get: 'all'
        });
        break;
      case 'Price: Lowest to high':
        resetScreen();
        props.setSort({
          sort_by: 'price',
          sort_type: 'asc',
          get: 'all'
        });
        break;
      case 'Price: Highest to low':
        resetScreen();
        props.setSort({
          sort_by: 'price',
          sort_type: 'desc',
          get: 'all'
        });
        break;
    
      default:
        resetScreen();
        props.setSort({
          sort_by: 'created_at',
          sort_type: 'asc',
          get: 'all'
        });
        break;
    }
  }
  const sanitizeFilters = () => {
    return {
      sizes: props.products.filters.sizes.toLowerCase(),
      colors: props.products.filters.colors.replace('#', ''),
      categories: props.products.filters.categories.replace('All', '')
    }
  }
  const resetScreen = () => {
    setLastPage(false);
    setPage(0);
    setLimit(5);
    setIsFiltered(false);
    setIsSorted(false);
    setAllProducts([]);
    props.setSearch('');
  }
  const truncateProducts = () => {
    setAllProducts([]);
  }
  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
  }

  return (
    <View>
      <Topbar
        backNav='Home'
        title='Shop'
        search={true}
      />
      <View style={style.actionBar}>
        <TouchableOpacity style={style.barAction} onPress={() => navigation.navigate('Filter')}>
          <Ionicons name='filter' size={20} color={color.dark} />
          <Text style={style.actionText}>Filters</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ ...style.barAction, width: Dimensions.get('window').width * 55 / 100 - 20, }} onPress={() => setModalVisible(true)}>
          <Ionicons name='swap-vertical' size={20} color={color.dark} />
          <Text style={style.actionText}>{activeSort}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.sortAction} onPress={() => setModalVisible(true)}>
          <Ionicons name='funnel-outline' size={20} color={color.dark} />
        </TouchableOpacity>
      </View>
      <ScrollView
        scrollEventThrottle={16}
        onMomentumScrollEnd={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            if (!lastPage) {
              isFiltered
                ? getMoreFilteredProducts()
                : getMoreProducts();
            }
          }}}>
        <View style={style.container}>
          {/* <Product
            labelName='new'
            data={data}
            width={Dimensions.get('window').width * 50 / 100 - 15}
          /> */}
          {isLoading
            ? <Text>Loading...</Text>
            : allProducts.length > 0
                ? allProducts.map((product, index) => {
                  return (
                    <Product
                      key={index}
                      label={index < 5 && true}
                      labelName='new'
                      data={product}
                      width={Dimensions.get('window').width * 50 / 100 - 30}
                      onPress={() => navigation.navigate('DetailProduct', { product: product })} />
                    )
                  })
                : <Text>Not Found</Text>}
        </View>
      </ScrollView>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}>
        <TouchableOpacity style={style.modalFade} onPress={() => setModalVisible(false)}></TouchableOpacity>
        <View style={style.modalContainer}>
          <View style={style.scrollTit}></View>
          <Text style={style.titleText}>Sort by</Text>
          <View>
            {sortActionList.map((list, key) => {
              if (list === activeSort) {
                return (
                  <TouchableOpacity style={{ ...style.listContainer, backgroundColor: color.primary }} key={key} onPress={() => handleSetSort(list)}>
                    <Text style={{ ...style.listText, color: color.light }}>{list}</Text>
                  </TouchableOpacity>
                )
              } else {
                return (
                  <TouchableOpacity style={style.listContainer} key={key} onPress={() => handleSetSort(list)}>
                    <Text style={style.listText}>{list}</Text>
                  </TouchableOpacity>
                )
              }
            })}
          </View>
        </View>
      </Modal>
    </View>
  )
}

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = {
  allProducts,
  setSort,
  clearProducts,
  setSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);