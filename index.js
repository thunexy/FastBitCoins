import React from 'react';
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './source/redux/configureStore';

const store = configureStore();

let persistor = persistStore(store);

const RNRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
