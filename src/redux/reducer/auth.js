import * as types from '../type';
const initialState = {
  // authenticated: false,
  // isLogin: false,
  loginSuccess: false,
  isLoading: false,
  token: "",
  roles: {},
  fullName: "",
  position: "",
  status: "",
  userName: "",
  userId: "",
  deviceId: "",
  consumerKey: "",
  message: "",
  menus: {},
}
export default function authen(state = initialState, action) {
  switch (action.type) {
    case types.IS_LOADING:
      {
        return{
          ...state,
          isLoading:true,
        }
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: true,
        // authenticated:true,
        // token: action.payload.token,
        // data: action.payload.data,
        isLoading:false,
        token: action.payload.token,
        roles: action.payload.roles,
        fullName: action.payload.fullName,
        position: action.payload.position,
        status: action.payload.status,
        userName: action.payload.userName,
        userId: action.payload.userId,
        deviceId: action.payload.deviceId,
        consumerKey: action.payload.consumerKey,
        message: action.payload.message,
        menus: action.payload.menus
      };
    case types.LOG_OUT:
      return {
        ...state,
        loginSuccess: false,
        token: '',
        data: {}
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        token: '',
        data: {}
      }
    default:
      return state;
  }
}
