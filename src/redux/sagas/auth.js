import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../type';
import {_POST} from '../connection/api';
import {
    loginAction,
loginSuccess,
logOut,
loginFailed,
}
from '../action/auth'
// const URL_LOGIN = 'https://telesale.adfilex.vn/umiapi/oauth/login'
const URL_LOGIN = 'https://office.adfilex.vn/umiapi/oauth/login'
function* sagaLoginAction(action) {
    try {
      const data = {
        userName: action.payload.user,
        password: action.payload.password,
        deviceId:"test"
      };
      const response = yield _POST(URL_LOGIN, data);
      console.log('=>>>>>', response);
      if (response.token) {
        yield put(
          loginSuccess({
            token: response.token,
            data: response.user,
            roles:response.roles,
            fullName:response.fullName,
            position:response.position,
            status:response.status,
            userName:response.userName,
            userId:response.userId,
            deviceId:response.deviceId,
            consumerKey:response.consumerKey,
            message:response.message,
            menus:response.menu,
          }),
        );
      
      } else {
        yield put(loginFailed());
      }
    } catch (error) {
      console.log(error);
    }
  }
  export function* watchLoginAction() {
    yield takeLatest(types.LOGIN_ACTION, sagaLoginAction);
  }