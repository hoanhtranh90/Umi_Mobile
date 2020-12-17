/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Index from './src/navigator/index'
import {Provider} from 'react-redux'
import {store} from './src/redux/store/index'
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
    <Index/>
    </Provider>
  );
};



export default App;
