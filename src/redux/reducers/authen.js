import * as types from '../types';

const initialState = {
  loginSuccess: false,
};
export default function authen(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: true,
      };

    default:
      return state;
  }
}
