import { all, fork } from 'redux-saga/effects';
import * as authen from './auth';

export function* rootSaga() {
  yield all([
    ...Object.values(authen),
  ].map(fork));
}