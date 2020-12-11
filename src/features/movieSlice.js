import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = movieSlice.actions;
export const selectCount = state => state.counter.value;
export default movieSlice.reducer;
