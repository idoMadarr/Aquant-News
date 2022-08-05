import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Screens
import NewsScreen from '../../screens/NewsScreen/NewsScreen';

// Components
import CategoriesList from '../../components/CategoriesList/CategoriesList';

// Fixtures
import {categoriesList} from '../../fixtures/categories.json';

const CategoryNavigation = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      tabBar={() => <CategoriesList navigation={navigation} />}
      screenOptions={{swipeEnabled: false}}>
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
