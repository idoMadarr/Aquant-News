import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import TabNavigation from '../TabNavigation/TabNavigation';
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen';

const AppNavigation = () => {
  const MainNavigator = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <MainNavigator.Navigator screenOptions={{headerShown: false}}>
        <MainNavigator.Screen name={'menu-tabs'} component={TabNavigation} />
        <MainNavigator.Screen
          name={'details-screen'}
          component={DetailsScreen}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
