import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './MyDrawer';

const Home = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default Home;
