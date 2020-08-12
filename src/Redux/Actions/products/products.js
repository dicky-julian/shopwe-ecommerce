import actionType from './actionType';

export const initProducts = () => {
  return {
    type: actionType.INIT_PRODUCTS,
    payload: null
  };
};
export const allProducts = (data) => {
  return {
    type: actionType.SET_ALL_PRODUCTS,
    payload: data
  };
};
export const newProducts = (data) => {
  return {
    type: actionType.SET_NEW_PRODUCTS,
    payload: data
  };
};
export const popularProducts = (data) => {
  return {
    type: actionType.SET_POPULAR_PRODUCTS,
    payload: data
  };
};
export const setFilters = (data) => {
  return {
    type: actionType.SET_FILTERS,
    payload: data
  };
};
export const setSort = (data) => {
  return {
    type: actionType.SET_SORT,
    payload: data
  };
};
export const setSearch = (data) => {
  return {
    type: actionType.SET_SEARCH,
    payload: data
  };
};
export const clearProducts = () => {
  return {
    type: actionType.CLEAR_PRODUCTS
  };
};
