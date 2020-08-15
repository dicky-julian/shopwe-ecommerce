import axios from 'axios';

export const get_all_order = (data) => {
  return {
    type: 'GET_ALL_ORDER',
    payload: data
  };
};

export const get_id_order = (data) => {
  return {
    type: 'GET_ID_ORDER',
    payload: data
  };
};

export const setOrder = (data) => {
  return {
    type: 'SET_ORDER',
    payload: data
  };
};