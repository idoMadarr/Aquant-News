import React, {useRef, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

// Components
import AppHeader from '../../components/AppHeader/AppHeader';
import {Modalize} from 'react-native-modalize';

// Screens
import TabNavigation from '../TabNavigation/TabNavigation';
import StackNavigation from '../StackNavigation/StackNavigation';

// Components
import Modal from '../../components/Modal/Modal';

const AppNavigation = () => {
  const MainNavigator = createNativeStackNavigator();

  const message = useSelector(state => state.newsSlice.message);
  const modalizeRef = useRef();

  useEffect(() => {
    if (message) modalizeRef.current.open();
  }, [message]);

  const closeModal = () => modalizeRef.current.close();

  return (
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{header: () => <AppHeader />}}>
        <MainNavigator.Screen name={'menu-tabs'} component={TabNavigation} />
        <MainNavigator.Screen
          name={'main-stack'}
          component={StackNavigation}
          options={{headerShown: false}}
        />
      </MainNavigator.Navigator>
      <Modalize
        ref={modalizeRef}
        adjustToContentHeight={true}
        closeOnOverlayTap={true}>
        <Modal message={message} closeModal={closeModal} />
      </Modalize>
    </NavigationContainer>
  );
};

export default AppNavigation;
