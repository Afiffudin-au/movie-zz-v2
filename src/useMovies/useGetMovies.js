import Axios from "axios"
import { useDispatch } from "react-redux"
import { addMovie } from "../features/movieSlice"

export function useGetMovies() {
  const dispatch = useDispatch()
  const getMoviePopular = () => {
    dispatch(addMovie({
      loading: true
    }))
    Axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: { page: 1 }
    }).then(res => {
      dispatch(addMovie({
        loading: false,
        dataMovies: res.data
      }))
    }).catch(err => {
      dispatch(addMovie({
        loading: false
      }))
      alert(err)
    })
  }
  const getMovieNowPlaying = () => {
    dispatch(addMovie({
      loading: true
    }))
    Axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: { page: 1 }
    }).then(res => {
      dispatch(addMovie({
        loading: false,
        dataMovies: res.data
      }))
    }).catch(err => {
      dispatch(addMovie({
        loading: false
      }))
      alert(err)
    })
  }
  const getMovieUpcoming = () => {
    dispatch(addMovie({
      loading: true
    }))
    Axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: { page: 1 }
    }).then(res => {
      dispatch(addMovie({
        loading: false,
        dataMovies: res.data
      }))
    }).catch(err => {
      dispatch(addMovie({
        loading: false
      }))
      alert(err)
    })
  }
  const getMovieTopRated = () => {
    dispatch(addMovie({
      loading: true
    }))
    Axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: { page: 1 }
    }).then(res => {
      dispatch(addMovie({
        loading: false,
        dataMovies: res.data
      }))
    }).catch(err => {
      dispatch(addMovie({
        loading: false
      }))
      alert(err)
    })

  }
  return {
    getMoviePopular,
    getMovieNowPlaying,
    getMovieUpcoming,
    getMovieTopRated
  }
}