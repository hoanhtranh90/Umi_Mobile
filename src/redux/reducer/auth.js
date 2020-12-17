import * as types from '../type';
const initialState = {
    authenticated: false,
    isLogin: false,
    loginSuccess: false,
    token: '',
    autoLoginStatus: false,
    // role: '',
    // userProfile: {},
    // remember: false,
    fullname: '',
    // phone_number: '',
    // email: '',
    // address: '',
    // team_id: '',
    // team_name: '',
    data:{}
}
export default function authen(state = initialState, action) {
    switch (action.type) {
      case types.LOGIN_SUCCESS:
        return {
          ...state,
          loginSuccess: true,
          token: action.payload.token,
          data:action.payload.data,
        };
      case types.LOG_OUT:
        return {
          ...state,
          loginSuccess: false,
          token: '',
          data:{}
        };
    case types.LOGIN_FAILED:
        return {
            ...state,
          token: '',
          data:{}
        }
      default:
        return state;
    }
  }
  