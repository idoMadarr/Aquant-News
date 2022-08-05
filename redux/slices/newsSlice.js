import {createSlice} from '@reduxjs/toolkit';

const defaultTab = 'categories-screen';
const defaultCategory = 'entertainment';

const initialState = {
  currentTab: defaultTab,
  currentCategory: defaultCategory,
  message: null,
  isLoading: true,
};

export const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    setTab: (state, action) => {
      state.currentTab = action.payload;
    },
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const {setTab, setCategory, setMessage} = newsSlice.actions;

export default newsSlice.reducer;
