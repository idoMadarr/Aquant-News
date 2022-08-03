import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../assets/colors/colors';

const itemWidth = Dimensions.get('window').width;

const DetailsScreen = ({navigation, route}) => {
  const {author, title, description, urlToImage, publishedAt, content} =
    route.params.details;

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.screen}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.greyish} />
      <TouchableOpacity style={styles.backIcon} onPress={goBack}>
        <Text>{'< Back'}</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={[styles.bold, styles.center]}>{title}</Text>
        <Text>- {author} -</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{uri: urlToImage}} style={styles.image} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.lineHeight}>{description}</Text>
          <Text style={styles.lineHeight}>{content}</Text>
          <Text style={styles.center}>{publishedAt}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.greyish,
  },
  bold: {
    fontSize: 18,
    color: colors.black,
  },
  center: {
    textAlign: 'center',
  },
  imageContainer: {
    height: 200,
    width: itemWidth,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    padding: 16,
  },
  lineHeight: {
    lineHeight: 24,
  },
  backIcon: {
    paddingHorizontal: 16,
    backgroundColor: colors.greyish,
  },
});

export default DetailsScreen;

/* 

 {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Igor Bonifacic",
            "title": "Extreme sports Apple Watch could feature an expansive 2-inch display",
            "description": "Apple’s long-rumored extreme sports Series 8 Watch could ship with the company’s largest smartwatch display to date. According to Bloomberg’s\r\n Mark Gurman\r\n, the forthcoming wearable features a screen that measures almost 2 inches diagonally and has a 410 by…",
            "url": "https://www.engadget.com/apple-watch-series-8-rugged-edition-212054023.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/f7478130-2b96-11ec-a1fb-7ab26f0589b0",
            "publishedAt": "2022-07-06T21:20:54Z",
            "content": "Apples long-rumored extreme sports Series 8 Watch could ship with the companys largest smartwatch display to date. According to Bloombergs\r\n Mark Gurman\r\n, the forthcoming wearable features a screen … [+1358 chars]"
        },
*/
