import {takeLatest, put} from 'redux-saga/effects';
import * as types from '../types';
import {loginSuccess, loginFailed} from '../actions/authen';
import {_global} from '../../utlis/global';

function* sagaLoginAction(action) {
  const data = {
    email: action.payload.email,
  };

  if (data.email === 'Umi') {
    yield put(loginSuccess());
  } else {
    yield put(loginFailed());
    _global.Alert.alert({
      title: 'Nhập sai mẫu',
      message: 'Vui lòng nhập Umi để vào app',
      leftButton: {text: 'Ok'},
    });
  }
}

export function* watchLoginAction() {
  yield takeLatest(types.LOGIN_ACTION, sagaLoginAction);
}
