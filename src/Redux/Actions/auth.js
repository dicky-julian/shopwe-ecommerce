import axios from 'axios';
import { API_URL } from '@env';
export const login = (data) => {
  return {
    type: 'LOGIN',
    payload: data
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};