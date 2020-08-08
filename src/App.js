import 'react-native-gesture-handler';
import React from 'react';
// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storage from './Redux/store';
const { store, persiststore } = storage;
import Routes from './routes';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persiststore}>
                <Routes />
            </PersistGate>
        </Provider>
    )
}

export default App;