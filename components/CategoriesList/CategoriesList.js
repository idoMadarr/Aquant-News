import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setCategory} from '../../redux/slices/newsSlice';

// Components
import CategoryItem from '../CategoryItem/CategoryItem';

// Fixtures
import {categoriesList} from '../../fixtures/categories.json';

// Style
import {colors} from '../../assets/colors/colors';

const widthList = Dimensions.get('window').width * 0.85;

const CategoriesList = ({navigation}) => {
  const currentCategory = useSelector(state => state.newsSlice.currentCategory);
  const dispatch = useDispatch();

  const onCategory = category => {
    navigation.jumpTo(category);
    dispatch(setCategory(category));
  };

  return (
    <View style={styles.listWrapper}>
      <View style={styles.listContainer}>
        {categoriesList.map(({id, headline, name}) => (
          <CategoryItem
            key={id}
            headline={headline}
            name={name}
            onCategory={onCategory}
            currentCategory={currentCategory}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    backgroundColor: colors.white,
  },
  listContainer: {
    width: widthList,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default CategoriesList;
