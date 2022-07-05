import {Platform} from 'react-native';
import {
  CREATE_USER,
  LOGIN,
  SAVE_EMAIL,
  SAVE_LANGUAGE,
  SAVE_LOCATION,
  LOGOUT,
} from '../actions/types';
const initialState = {
  platform: Platform.OS === 'android' ? '2' : '3',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case SAVE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SAVE_EMAIL:
      return {
        ...state,
        email_address: action.payload,
      };
    case SAVE_LOCATION:
      return {
        ...state,
        ...action.payload,
      };
    case CREATE_USER:
      return {
        ...state,
        ...action.payload,
        isVerified: false,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
export default authReducer;
