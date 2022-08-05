import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

// Style
import {colors} from '../../assets/colors/colors';

const CategoryItem = ({headline, onCategory, currentCategory, name}) => {
  const backgroundColor =
    headline === currentCategory ? colors.primary : colors.white;
  const color = headline !== currentCategory ? colors.primary : colors.white;

  return (
    <TouchableOpacity
      onPress={onCategory.bind(this, headline)}
      style={[styles.itemContainer, {backgroundColor}]}>
      <Text style={{color}}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 8,
    borderRadius: 50,
    elevation: 3,
  },
});

export default CategoryItem;
