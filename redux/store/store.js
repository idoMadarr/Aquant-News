import {configureStore, combineReducers} from '@reduxjs/toolkit';

// Slices
import newsSlice from '../slices/newsSlice';

const rootReducer = combineReducers({
  newsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
