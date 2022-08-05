import React, {useEffect, useRef} from 'react';
import {TouchableOpacity, Animated, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {setTab} from '../../../redux/slices/newsSlice';

// Style
import TimeMachineIcon from '../../../assets/icons/timeMachineIcon.svg';
import SearchIcon from '../../../assets/icons/searchIcon.svg';

const navigationTabs = [<TimeMachineIcon />, <SearchIcon />];

const TabItem = ({tab, route, icon}) => {
  const navigation = useNavigation();

  const currentTab = useSelector(state => state.newsSlice.currentTab);
  const dispatch = useDispatch();

  const transitionRef = useRef(new Animated.Value(0)).current;
  const scaleRef = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (currentTab !== route) {
      Animated.spring(transitionRef, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.spring(scaleRef, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [currentTab]);

  const routeNavigation = () => {
    Animated.spring(transitionRef, {
      toValue: -3,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.spring(scaleRef, {
      toValue: 1.1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    dispatch(setTab(route));
    navigation.navigate(route);
  };

  const styles = StyleSheet.create({
    tabContainer: {
      alignItems: 'center',
      width: 75,
      height: '100%',
      justifyContent: 'center',
    },
    iconTabContainer: {
      transform: [{translateY: transitionRef}],
      marginVertical: 2,
    },
    scaleContainer: {
      transform: [{scale: scaleRef}],
    },
  });

  return (
    <TouchableOpacity style={styles.tabContainer} onPress={routeNavigation}>
      <Animated.View style={styles.scaleContainer}>
        <Animated.View style={styles.iconTabContainer}>
          {navigationTabs[icon]}
        </Animated.View>
      </Animated.View>
      <Animated.Text>{tab}</Animated.Text>
    </TouchableOpacity>
  );
};

export default TabItem;
