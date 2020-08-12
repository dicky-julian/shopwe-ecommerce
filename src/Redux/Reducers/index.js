import { combineReducers } from 'redux';
import product from './product';
import order from './order';

export default combineReducers({ product, order });