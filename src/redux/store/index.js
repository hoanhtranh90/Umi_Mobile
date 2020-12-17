import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { rootSaga } from '../sagas/index';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducer/index';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: [],
};

// const persistAuthen = {
//   key: 'authen',
//   storage: AsyncStorage,
//   whitelist: ['token'],
//   blacklist: [],
// };


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, createLogger()));
sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

export { store, persistor };