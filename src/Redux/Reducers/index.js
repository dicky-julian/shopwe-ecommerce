import { combineReducers } from 'redux';
import products from './products';
import auth from './auth';
import transaction from './transaction';

export default combineReducers({ products, auth, transaction });
