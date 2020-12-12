import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    popularBlock : {
      populars : [],
      loading : null,
      url : ''
    },
    movieToWatchBlock : {
      movieToWatch : [],
      loading : null,
      url : ''
    },
    tvToWatchBlock : {
      tvToWatch : [],
      loading : null,
      url : ''
    },
    searchResultBlock : {
      multiResults : [],
      loading  : null,
      url : ''
    },
    urlParamsBlock : {
      query : ''
    }
   
  },
  reducers: {
    addPopular: (state, action) => {
      state.popularBlock.loading = action.payload.loading
      state.popularBlock.url = action.payload.url
      if(action.payload.loading){
        state.popularBlock.populars = []
        return
      }
      state.popularBlock.populars = action.payload.dataPopulars;
    },
    addMovieToWatch : (state,action)=>{
      state.movieToWatchBlock.loading = action.payload.loading
      state.movieToWatchBlock.url = action.payload.url
      if(action.payload.loading){
        state.movieToWatchBlock.movieToWatch = []
        return
      }
      state.movieToWatchBlock.movieToWatch = action.payload.dataMovieToWatch;
    },
    addTvToWatch : (state,action)=>{
      state.tvToWatchBlock.loading = action.payload.loading
      state.tvToWatchBlock.url = action.payload.url
      if(action.payload.loading){
        state.tvToWatchBlock.tvToWatch = []
        return
      }
      state.tvToWatchBlock.tvToWatch = action.payload.datatvToWatch;
    },
    addSearchResult : (state,action)=>{
      state.searchResultBlock.loading  = action.payload.loading
      state.searchResultBlock.url  = action.payload.url
      if(action.payload.loading){
        state.searchResultBlock.multiResults = []
        return
      }
      state.searchResultBlock.multiResults = action.payload.dataMultiSearch
    },
    addUrlParams : (state,action)=>{
      state.urlParamsBlock.query = action.payload.query
    }
  },
});

export const { addPopular ,addMovieToWatch,addTvToWatch,addSearchResult,addUrlParams} = movieSlice.actions;
export const selectPopularBlock= state => state.movies.popularBlock;
export const selectMovieToWatchBlock= state => state.movies.movieToWatchBlock;
export const selectTvToWatchBlock= state => state.movies.tvToWatchBlock;
export const selectSearchResultBlock= state => state.movies.searchResultBlock;
export const selectUrlParamsBlock= state => state.movies.urlParamsBlock;
export default movieSlice.reducer;
