import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Style
import {colors} from '../../assets/colors/colors';

const AppHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Aquant News</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.greyish,
  },
  headerTitle: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default AppHeader;
