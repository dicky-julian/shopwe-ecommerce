import { combineReducers } from 'redux';
import products from './products';
import auth from './auth';

export default combineReducers({ products,auth });
