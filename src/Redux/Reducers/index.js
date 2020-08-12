import { combineReducers } from 'redux';
import products from './products';
import order from './order';
import auth from './auth';

export default combineReducers({ products, order, auth });
