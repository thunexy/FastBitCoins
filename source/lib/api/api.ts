import {APP_URL} from '../urls/urls';
type SignInResponse = {
  new_account: boolean;
  session_key: string;
  reactivation: boolean;
};
export type SignInRequest = {
  platform: string;
  email_address: string;
};
export type SignUpRequest = {
  platform: string;
  email_address: string;
  country: string;
  state: string;
  language: string;
};
export type MonitorSessionSecret = {
  secret: string;
};
export function signIn(
  data: SignInRequest,
  onSuccess: (result: SignInResponse) => void,
  onError: (error: Error) => void,
) {
  fetch(APP_URL.login, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    })
    .then(onSuccess)
    .catch(onError);
}

export function monitorLogin(
  session_key: string,
  onSuccess: (result: MonitorSessionSecret) => void,
  onError: (error: Error) => void,
) {
  fetch(APP_URL.monitor + session_key)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    })
    .then(onSuccess)
    .catch(onError);
}

export function signUp(
  data: SignUpRequest,
  onSuccess: (result: MonitorSessionSecret) => void,
  onError: (error: Error) => void,
) {
  console.log('aaa');
  fetch(APP_URL.createUser, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Something went wrong');
    })
    .then(onSuccess)
    .catch(onError);
}
