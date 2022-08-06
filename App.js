import React from 'react';
import {StatusBar, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import AppNavigation from './navigation/AppNavigation/AppNavigation';
import {colors} from './assets/colors/colors';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.light} />
      <AppNavigation />
    </Provider>
  );
};

export default App;
