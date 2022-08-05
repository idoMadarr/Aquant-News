import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen';

const StackNavigation = () => {
  const StackNavigator = createNativeStackNavigator();

  // Add new screens ...
  return (
    <StackNavigator.Navigator screenOptions={{headerShown: false}}>
      <StackNavigator.Screen
        name={'details-screen'}
        component={DetailsScreen}
      />
    </StackNavigator.Navigator>
  );
};

export default StackNavigation;
