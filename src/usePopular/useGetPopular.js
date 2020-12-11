import Axios from 'axios'
import { useDispatch } from 'react-redux'
import { addPopular } from '../features/movieSlice'

export function useGetPopular(){
  const dispatch = useDispatch()
  const getMoviePopular = ()=>{
    dispatch(addPopular({
      loading : true
    }))
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/popular?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      dispatch(addPopular({
        loading : false,
        dataPopulars : res.data
      }))
    }).catch(err=>{
      dispatch(addPopular({
        loading : false
      }))
      alert(err)
    })
  }
  const getTvPopular = ()=>{
    dispatch(addPopular({
      loading : true
    }))
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/popular?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      dispatch(addPopular({
        loading : false,
        dataPopulars : res.data
      }))
    }).catch(err=>{
      dispatch(addPopular({
        loading : false
      }))
      alert(err)
    })
  }
  const getMoviePopularInTheater = ()=>{
    dispatch(addPopular({
      loading : true
    }))
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/now_playing?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      dispatch(addPopular({
        loading : false,
        dataPopulars : res.data
      }))
    }).catch(err=>{
      dispatch(addPopular({
        loading : false
      }))
      alert(err)
    })
  }
  return{
    getMoviePopular,
    getTvPopular,
    getMoviePopularInTheater
  }
}