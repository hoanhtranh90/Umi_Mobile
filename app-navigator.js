/**
 * Created by phongdt on Fri Feb 07 2020
 * Copyright (c) 2020 phongdt@lumi.biz
 */

import React from 'react';
import {connect} from 'react-redux';
import {UIManager} from 'react-native';

import Navigator from './src/navigator';
import {_global} from './src/utlis/global';

import {Alert} from './src/components';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const AppNavigator = (props) => {
  return (
    <>
      <Navigator loginSuccess={props.loginSuccess} />

      <Alert
        ref={(ref) => {
          _global.Alert = ref;
        }}
      />
    </>
  );
};

const mapDispatchToProps = {};
const mapStateToProps = (state) => {
  return {
    loginSuccess: state.authen.loginSuccess,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
