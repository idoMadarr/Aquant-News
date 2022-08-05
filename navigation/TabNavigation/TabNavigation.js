import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CategoryNavigation from '../CategoryNavigation/CategoryNavigation';
import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import TabsContainer from '../../components/AppTabBar/TabsContainer/TabsContainer';

const TabNavigation = () => {
  const TabNavigator = createBottomTabNavigator();

  return (
    <TabNavigator.Navigator
      tabBar={() => <TabsContainer />}
      screenOptions={{
        headerShown: false,
        tabBarIcon: null,
      }}>
      <TabNavigator.Screen
        name={'categories-screen'}
        component={CategoryNavigation}
      />
      <TabNavigator.Screen name={'search-screen'} component={SearchScreen} />
    </TabNavigator.Navigator>
  );
};

export default TabNavigation;
