import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    popularBlock : {
      populars : [],
      loading : null
    },
    movieToWatchBlock : {
      movieToWatch : [],
      loading : null
    }
   
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
    addMovieToWatch : (state,action)=>{
      state.movieToWatchBlock.loading = action.payload.loading
      if(action.payload.loading){
        state.movieToWatchBlock.movieToWatch = []
        return
      }
      state.movieToWatchBlock.movieToWatch = action.payload.dataMovieToWatch;
    }
  },
});

export const { addPopular ,addMovieToWatch} = movieSlice.actions;
export const selectPopularBlock= state => state.movies.popularBlock;
export const selectMovieToWatchBlock= state => state.movies.movieToWatchBlock;
export default movieSlice.reducer;
