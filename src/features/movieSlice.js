import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    popularBlocks: {
      populars: [],
      loading: null,
      url: '',
    },
    movieToWatchBlocks: {
      movieToWatch: [],
      loading: null,
      url: '',
    },
    tvToWatchBlocks: {
      tvToWatch: [],
      loading: null,
      url: '',
    },
    searchResultBlocks: {
      multiResults: [],
      loading: null,
      url: '',
      totalPages: 0,
    },
    urlParamsBlock: {
      query: '',
    },
    detailBlocks: {
      details: {},
      loading: null,
    },
    movieBlocks: {
      movies: [],
      loading: null,
      url: '',
    },
    tvShowBlocks: {
      tvShows: [],
      loading: null,
      url: '',
    },
  },
  reducers: {
    addPopular: (state, action) => {
      state.popularBlocks.loading = action.payload.loading
      state.popularBlocks.url = action.payload.url
      state.popularBlocks.populars = action.payload.dataPopulars || []
    },
    addMovieToWatch: (state, action) => {
      state.movieToWatchBlocks.loading = action.payload.loading
      state.movieToWatchBlocks.url = action.payload.url
      state.movieToWatchBlocks.movieToWatch =
        action.payload.dataMovieToWatch || []
    },
    addTvToWatch: (state, action) => {
      state.tvToWatchBlocks.loading = action.payload.loading
      state.tvToWatchBlocks.url = action.payload.url
      state.tvToWatchBlocks.tvToWatch = action.payload.datatvToWatch || []
    },
    addSearchResult: (state, action) => {
      state.searchResultBlocks.loading = action.payload.loading
      state.searchResultBlocks.url = action.payload.url
      state.searchResultBlocks.totalPages =
        action.payload.dataMultiSearch?.total_pages || 0
      if (action.payload.removeCopyArray) {
        state.searchResultBlocks.multiResults.length = 0
      }
      if (!action.payload.loading) {
        state.searchResultBlocks.multiResults = [
          ...state.searchResultBlocks.multiResults,
          action.payload.dataMultiSearch?.results || [],
        ]
      }
    },
    addUrlParams: (state, action) => {
      state.urlParamsBlock.query = action.payload.query
    },
    addDetail: (state, action) => {
      state.detailBlocks.loading = action.payload.loading
      state.detailBlocks.details = action.payload.dataDetails || {}
    },
    addMovie: (state, action) => {
      state.movieBlocks.loading = action.payload.loading
      state.movieBlocks.url = action.payload.url
      state.movieBlocks.movies = action.payload.dataMovies || []
    },
    addTvShow: (state, action) => {
      state.tvShowBlocks.loading = action.payload.loading
      state.tvShowBlocks.url = action.payload.url
      state.tvShowBlocks.tvShows = action.payload.dataTvShows || []
    },
  },
})

export const {
  addPopular,
  addMovieToWatch,
  addTvToWatch,
  addSearchResult,
  addUrlParams,
  addDetail,
  addMovie,
  addTvShow,
} = movieSlice.actions
export const selectPopularBlocks = (state) => state.movies.popularBlocks
export const selectMovieToWatchBlocks = (state) =>
  state.movies.movieToWatchBlocks
export const selectTvToWatchBlocks = (state) => state.movies.tvToWatchBlocks
export const selectSearchResultBlocks = (state) =>
  state.movies.searchResultBlocks
export const selectUrlParamsBlock = (state) => state.movies.urlParamsBlock
export const selectDetailBlocks = (state) => state.movies.detailBlocks
export const selectMoviesBlocks = (state) => state.movies.movieBlocks
export const selectTvShowBlocks = (state) => state.movies.tvShowBlocks
export default movieSlice.reducer
