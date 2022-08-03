import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  news: [],
  isLoading: false,
};

export const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
  },
});

export const {setNews} = newsSlice.actions;

export default newsSlice.reducer;
