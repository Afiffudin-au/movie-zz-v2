import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    popularBlock : {
      populars : [],
      loading : null
    },
   
  },
  reducers: {
    addPopular: (state, action) => {
      state.popularBlock.loading = action.payload.loading
      if(action.payload.loading){
        state.popularBlock.populars = []
        return
      }
      state.popularBlock.populars = action.payload.dataPopulars;
    },
  },
});

export const { addPopular } = movieSlice.actions;
export const selectPopularBlock= state => state.movies.popularBlock;
export default movieSlice.reducer;
