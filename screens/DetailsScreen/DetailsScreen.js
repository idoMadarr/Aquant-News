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
import moment from 'moment';

// Style
import BackArrowIconBlack from '../../assets/icons/backArrowIconBlack.svg';
import {colors} from '../../assets/colors/colors';

const itemWidth = Dimensions.get('window').width;
const buttonWidth = Dimensions.get('window').width * 0.85;

const DetailsScreen = ({navigation, route}) => {
  const {author, title, description, urlToImage, publishedAt, content} =
    route.params.details;

  const goBack = () => navigation.goBack();

  const imagePlaceholder =
    'https://adom-it.co.il/wp-content/uploads/2020/01/placeholder.png';

  return (
    <View style={styles.screen}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.dark} />
      <View style={styles.header}>
        <Text style={[styles.bold, {color: colors.white}]}>{title}</Text>
        <Text style={[styles.underline, {color: colors.white}]}>
          - {author || 'BBC'} -
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: urlToImage || imagePlaceholder}}
            style={styles.image}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.lineHeight}>{description}</Text>
          <Text style={[styles.bold]}>
            Published At {moment(publishedAt).format('dd MMM YY')}
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.backIcon} onPress={goBack}>
        <BackArrowIconBlack />
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark,
  },
  bold: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
  },

  imageContainer: {
    height: 240,
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
    paddingVertical: 16,
    lineHeight: 24,
  },
  backIcon: {
    flexDirection: 'row',
    height: 50,
    marginVertical: 16,
    width: buttonWidth,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.dark,
    backgroundColor: colors.white,
  },
});

export default DetailsScreen;
