import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {setMessage} from '../../redux/slices/newsSlice';
import moment from 'moment';

// Style
import StarIcon from '../../assets/icons/starIcon.svg';
import {colors} from '../../assets/colors/colors';

const SearchItem = ({element}) => {
  const {author, title, publishedAt, content} = element;

  const dispatch = useDispatch();

  const moreDetails = () => {
    const message = {
      status: title,
      message: content,
    };
    dispatch(setMessage(message));
  };

  return (
    <TouchableOpacity onPress={moreDetails} style={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <Text numberOfLines={1} style={[styles.white, styles.bold]}>
          {title}
        </Text>
        <StarIcon />
      </View>
      <View style={[styles.itemContainer]}>
        <Text numberOfLines={1} style={styles.white}>
          {author || 'BBC'}
        </Text>
        <Text style={[styles.white, styles.red]}>
          {moment(publishedAt).format('dd.MMM.YY')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    height: 90,
    width: '100%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    borderColor: colors.dark,
    backgroundColor: colors.dark,
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  white: {
    maxWidth: '85%',
    color: colors.white,
  },
  bold: {
    fontSize: 16,
    fontWeight: '900',
  },
  red: {
    color: colors.warning,
  },
});

export default SearchItem;
