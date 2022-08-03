import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {getCategoryNews} from '../../redux/actions/newsActions';

// Components
import ArticleItem from '../../components/ArticleItem/ArticleItem';

const NewsScreen = ({navigation, route}) => {
  const categoryName = route.name;

  const [news, setNews] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const initScreen = async () => {
      const categoryNews = await getCategoryNews(categoryName);
      setNews(categoryNews?.articles);
      setIsLoading(false);
    };
    initScreen();
  }, []);

  const onArticle = details => navigation.navigate('details-screen', {details});

  return (
    <SafeAreaView style={styles.screen}>
      {loading && news ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={news.slice(0, 20)}
          keyExtractor={() => Math.random().toString()}
          showsVerticalScrollIndicator={false}
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
  },
});

export default NewsScreen;
