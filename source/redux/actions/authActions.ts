import {
  CREATE_USER,
  LOGIN,
  SAVE_EMAIL,
  SAVE_LANGUAGE,
  SAVE_LOCATION,
} from './types';
export function loginUser(payload) {
  return {
    type: LOGIN,
    payload,
  };
}
export function saveLanguage(language) {
  return {
    type: SAVE_LANGUAGE,
    payload: language,
  };
}
export function saveEmail(email) {
  return {
    type: SAVE_EMAIL,
    payload: email,
  };
}
export function saveLocation(payload) {
  return {
    type: SAVE_LOCATION,
    payload,
  };
}
export function createUser(payload) {
  return {
    type: CREATE_USER,
    payload,
  };
}
