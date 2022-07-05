import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, createStore} from 'redux';
import {persistReducer} from 'redux-persist';
import authReducer from './reducers/authReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({auth: authReducer});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  return createStore(persistedReducer);
};
export default configureStore;
