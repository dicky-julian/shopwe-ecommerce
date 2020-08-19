import { combineReducers } from 'redux';
import products from './products';
import order from './order';
import auth from './auth';
import transaction from './transaction';

export default combineReducers({ products, order, auth, transaction });
