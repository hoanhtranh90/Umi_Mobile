import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../type';
import {_POST} from '../connection/api';
import axios from 'axios'
import {
    loginAction,
loginSuccess,
logOut,
loginFailed,
}
from '../action/auth'
const URL_LOGIN = 'http://192.168.1.239:9698/umiapi/oauth/login'
function* sagaLoginAction(action) {
    try {
      const data = {
        userName: "TrungNTt",
        password: "123456a@",
        deviceId:"a"
      };
      const response = yield _POST(URL_LOGIN, data);
      console.log('=>>>>>', response);
      if (response.token) {
        yield put(
          loginSuccess({
            token: response.token,
            data: response.user,
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