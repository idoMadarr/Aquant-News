import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {getSearchResults} from '../../redux/actions/newsActions';

// Components
import SearchItem from '../../components/SearchItem/SearchItem';

// Style
import {colors} from '../../assets/colors/colors';

const widthInput = Dimensions.get('window').width * 0.85;

const SearchScreen = () => {
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();

  const updateSearch = async value => {
    if (value === '') return setSearchResults([]);
    const results = await dispatch(getSearchResults(value));
    if (results?.articles) setSearchResults(results.articles);
  };

  const debounce = func => {
    let timer;
    return args => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func(args);
      }, 500);
    };
  };

  const optimizeSearchFunc = useCallback(debounce(updateSearch), []);

  return (
    <View style={styles.screen}>
      <TextInput
        placeholder={'Search'}
        onChangeText={optimizeSearchFunc}
        style={styles.inputElement}
      />
      {searchResults.length > 1 ? (
        <FlatList
          data={searchResults.slice(0, 40)}
          keyExtractor={() => Math.random().toString()}
          showsVerticalScrollIndicator={false}
          renderItem={itemData => <SearchItem element={itemData.item} />}
          style={styles.listContainer}
        />
      ) : (
        <View
          style={{width: 360, height: 260, position: 'absolute', top: '30%'}}>
          <Image
            source={require('../../assets/images/2642704.jpg')}
            resizeMode={'cover'}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  inputElement: {
    width: widthInput,
    borderBottomWidth: 1,
    borderColor: colors.greyish,
    paddingHorizontal: 16,
  },
  listContainer: {
    width: widthInput,
  },
});

export default SearchScreen;
