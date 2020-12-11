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
    },
    tvToWatchBlock : {
      tvToWatch : [],
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
    },
    addTvToWatch : (state,action)=>{
      state.tvToWatchBlock.loading = action.payload.loading
      if(action.payload.loading){
        state.tvToWatchBlock.tvToWatch = []
        return
      }
      state.tvToWatchBlock.tvToWatch = action.payload.datatvToWatch;
    }
  },
});

export const { addPopular ,addMovieToWatch,addTvToWatch} = movieSlice.actions;
export const selectPopularBlock= state => state.movies.popularBlock;
export const selectMovieToWatchBlock= state => state.movies.movieToWatchBlock;
export const selectTvToWatchBlock= state => state.movies.tvToWatchBlock;
export default movieSlice.reducer;
