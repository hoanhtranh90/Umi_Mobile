import * as types from '../type';

export const loginAction = (data) => {
  return {
    type: types.LOGIN_ACTION,
    payload: data,
  };
};

export const isLoading = (data) => {
  return {
    type: types.IS_LOADING,
    payload: data,
  };
};
export const loginSuccess = (data) => {
    return {
      type: types.LOGIN_SUCCESS,
      payload: data,
    };
  };
export const logOut = () => {
    return {
      type: types.LOG_OUT,
    };
  };

  export const loginFailed = () => {
    return {
      type: types.LOGIN_FAILED,
    };
  };


  