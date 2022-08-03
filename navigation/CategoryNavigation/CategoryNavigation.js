import React from 'react';
import {Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewsScreen from '../../screens/NewsScreen/NewsScreen';

// Fixtures
import {categoriesList} from '../../fixtures/categories.json';

const CategoryNavigation = () => {
  const itemWidth = Dimensions.get('window').width / 3;

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {fontSize: 11},
        tabBarItemStyle: {width: itemWidth, padding: 0},
      }}>
      {categoriesList.map(({id, headline}) => (
        <Tab.Screen
          key={id}
          name={headline}
          component={NewsScreen}
          initialParams={{headline}}
        />
      ))}
    </Tab.Navigator>
  );
};

export default CategoryNavigation;
