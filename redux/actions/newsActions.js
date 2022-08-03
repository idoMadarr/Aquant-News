import {Alert} from 'react-native';
import axios from 'axios';
import {domain, key} from '../../fixtures/credentials.json';

export const getCategoryNews = async categoryName => {
  try {
    const {data} = await axios.get(
      domain + 'everything?q=' + categoryName + '&apiKey=' + key,
    );
    return data;
  } catch (error) {
    Alert.alert('Alert Title');
  }
};
