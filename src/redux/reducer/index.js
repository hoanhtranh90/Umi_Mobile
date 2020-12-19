import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// Imports: Reducers
import authen from './auth';
import AsyncStorage from '@react-native-community/async-storage';


// Redux: Root Reducer
const authPersistConfig = {
  key: 'authen',
  storage: AsyncStorage,
  whitelist: [
    'loginSuccess',
    'token',
    'roles',
    'fullName',
    'position',
    'status',
    'userName',
    'userId',
    'deviceId',
    'consumerKey',
    'message',
    'menus',
  ],
};

const rootReducer = combineReducers({
  authen: persistReducer(authPersistConfig, authen),
});

// Exports
export default rootReducer;