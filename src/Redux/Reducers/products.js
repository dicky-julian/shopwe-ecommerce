import actionType from "../Actions/products/actionType";
const initialState = {
  new: [],
  popular: [],
  all: [],
  filters: {},
  sort: {},
  search: ''
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INIT_PRODUCTS: {
      console.log('initiated!')
      return {
        all: [],
        new: [],
        popular: [],
        filters: {
          colors: '#000',
          sizes: 'XS',
          categories: 'All'
        },
        sort: {
          sort_by: 'created_at',
          sort_type: 'asc',
          get: 'all'
        },
        search: ''
      }
    }
    case actionType.SET_ALL_PRODUCTS: {
      return {
        ...state,
        all: action.payload
      }
    }
    case actionType.SET_NEW_PRODUCTS: {
      return {
        ...state,
        new: action.payload
      }
    }
    case actionType.SET_POPULAR_PRODUCTS: {
      return {
        ...state,
        popular: action.payload
      }
    }
    case actionType.SET_FILTERS: {
      return {
        ...state,
        filters: action.payload
      }
    }
    case actionType.SET_SORT: {
      return {
        ...state,
        sort: action.payload
      }
    }
    case actionType.SET_SEARCH: {
      return {
        ...state,
        search: action.payload
      }
    }
    case actionType.CLEAR_PRODUCTS: {
      return {
        ...state,
        all: []
      }
    }

    case 'SET_PRODUCT':
      return {
        products: action.payload
      }
    default:
      return state
  }
}

export default products;