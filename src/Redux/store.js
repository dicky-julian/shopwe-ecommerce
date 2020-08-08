import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './Reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: 0,
    // whitelist: ['auth']
}

const persistreducer = persistReducer(persistConfig, reducer);
const store = createStore(
    persistreducer,
    applyMiddleware(thunk)
);

const persiststore = persistStore(store);

export default { store, persiststore };