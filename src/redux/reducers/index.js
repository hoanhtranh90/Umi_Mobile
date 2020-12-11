// Imports: Dependencies
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
// Imports: Reducers
import authen from './authen';
import AsyncStorage from '@react-native-community/async-storage';

// Redux: Root Reducer
const authPersistConfig = {
  key: 'authen',
  storage: AsyncStorage,
  whitelist: ['email'],
};

const rootReducer = combineReducers({
  authen: persistReducer(authPersistConfig, authen),
});

// Exports
export default rootReducer;
