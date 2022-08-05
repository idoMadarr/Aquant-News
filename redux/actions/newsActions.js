import axios from 'axios';
import {setMessage} from '../slices/newsSlice';
import {domain, key} from '../../fixtures/credentials.json';
import store from '../store/store';

// Axios Response Interceptor Only
axios.interceptors.response.use(undefined, error => {
  const errorMessage = error.response.data;
  return store.dispatch(setMessage(errorMessage));
});

export const getCategoryNews = categoryName => async dispatch => {
  const {data} = await axios.get(
    domain +
      'top-headlines?country=us&category=' +
      categoryName +
      '&apiKey=' +
      key,
  );
  return data;
};

export const getSearchResults = search => async dispatch => {
  const {data} = await axios.get(
    domain + 'everything?q=' + search + '&apiKey=' + key,
  );
  return data;
};
