import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

// Components
import TabItem from '../TabItem/TabItem';

// Style
import {colors} from '../../../assets/colors/colors';

// Fixtures
import {tabs} from '../../../fixtures/tabs.json';

const tabsWidth = Dimensions.get('window').width;

const TabsContainer = () => {
  return (
    <View style={styles.tabBarContainer}>
      {tabs.map(({tab, route, icon}) => (
        <TabItem key={tab} tab={tab} route={route} icon={icon} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    height: 60,
    width: tabsWidth,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.greyish,
  },
});

export default TabsContainer;
