import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors/colors';

const SearchItem = ({element}) => {
  const {author, title, publishedAt} = element;

  return (
    <View style={styles.mainContainer}>
      <Text style={{fontSize: 12, textAlign: 'center'}}>{title}</Text>
      <View style={styles.itemContainer}>
        <Text>{author}</Text>
        <Text>{publishedAt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderBottomWidth: 1,
    marginVertical: 10,
    borderColor: colors.black,
  },
  itemContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.light,
  },
});

export default SearchItem;
