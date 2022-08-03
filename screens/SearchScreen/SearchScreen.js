import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import {getCategoryNews} from '../../redux/actions/newsActions';

// Components
import SearchItem from '../../components/SearchItem/SearchItem';

// Style
import {colors} from '../../assets/colors/colors';

const SearchScreen = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (inputSearch) {
      const initResults = async () => {
        const results = await getCategoryNews(inputSearch);
        setSearchResults(results.articles);
      };
      initResults();
    }
  }, [inputSearch]);

  const updateSearch = value => setInputSearch(value);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>SearchScreen</Text>
      <TextInput
        placeholder={'Search'}
        value={inputSearch}
        onChangeText={updateSearch}
        style={styles.inputElement}
      />
      <FlatList
        data={searchResults.slice(0, 20)}
        keyExtractor={() => Math.random().toString()}
        showsVerticalScrollIndicator={false}
        renderItem={itemData => <SearchItem element={itemData.item} />}
        style={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  inputElement: {
    backgroundColor: colors.light,
  },
  listContainer: {
    paddingHorizontal: 32,
  },
});

export default SearchScreen;
