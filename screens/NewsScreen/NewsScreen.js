import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {getCategoryNews} from '../../redux/actions/newsActions';
import {useDispatch} from 'react-redux';

// Components
import ArticleItem from '../../components/ArticleItem/ArticleItem';

// Style
import {colors} from '../../assets/colors/colors';

const itemWidth = Dimensions.get('window').width * 0.85;

const NewsScreen = ({navigation, route}) => {
  const categoryName = route.name;

  const [news, setNews] = useState(null);
  const [displayNews, setDisplayNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [listLength, setListLength] = useState(15);
  const [loading, setLoading] = useState(true);

  // Pagination
  const displayPerPage = 15;
  const lastPage = parseInt(listLength / displayPerPage) + 1;
  const indexOfLastList = currentPage * displayPerPage;
  const indexOfFirstList = indexOfLastList - displayPerPage;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNews = async () => {
      const categoryNews = await dispatch(getCategoryNews(categoryName));
      if (categoryNews?.articles) {
        setLoading(false);
        setNews(categoryNews?.articles);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    if (!news) return;
    let categorySymbols = news;
    setListLength(categorySymbols.length);
    const loadSymbols = categorySymbols.slice(
      indexOfFirstList,
      indexOfLastList,
    );
    setDisplayNews(prevState => prevState.concat(loadSymbols));
  }, [currentPage, news]);

  const loadMore = () => {
    if (currentPage == lastPage) return;
    setCurrentPage(prevState => prevState + 1);
  };

  const onArticle = details =>
    navigation.navigate('main-stack', {
      screen: 'details-screen',
      params: {details},
    });

  const listFooterComponent = () => {
    if (currentPage == lastPage) return null;
    return (
      <ActivityIndicator
        size={'small'}
        color={colors.primary}
        style={{padding: 32}}
      />
    );
  };

  const itemSeparatorComponent = () => <View style={styles.seperator} />;

  return (
    <SafeAreaView style={styles.screen}>
      {loading ? (
        <ActivityIndicator size={'large'} color={colors.primary} />
      ) : (
        <FlatList
          data={displayNews}
          keyExtractor={() => Math.random().toString()}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          initialNumToRender={6}
          ListFooterComponent={listFooterComponent}
          ItemSeparatorComponent={itemSeparatorComponent}
          renderItem={itemData => (
            <ArticleItem
              element={itemData.item}
              index={itemData.item}
              onArticle={onArticle}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  seperator: {
    borderWidth: 0.5,
    borderColor: colors.primary,
    width: itemWidth,
    alignSelf: 'center',
  },
});

export default NewsScreen;
