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
const URL_LOGIN = 'https://quiz-demo-eng.herokuapp.com/authenticate'
function* sagaLoginAction(action) {
    try {
      const data = {
        username: action.payload.user,
        password: action.payload.password,
      };
      const response = yield _POST(URL_LOGIN, data);
      console.log('=>>>>>', response);
      if (response) {
        yield put(
          loginSuccess({
            token: response.data.token,
            data: response.data.user,
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