import * as types from '../types';

export const loginAction = (data) => {
  return {
    type: types.LOGIN_ACTION,
    payload: data,
  };
};
export const loginSuccess = (data) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFailed = () => {
  return {
    type: types.LOGIN_FAILED,
  };
};
