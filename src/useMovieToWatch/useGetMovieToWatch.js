import Axios from "axios"
import { useDispatch } from "react-redux"
import {addMovieToWatch} from '../features/movieSlice'
export function useGetMovieToWatch(){
  const dispatch = useDispatch()
  const getMovieTopRated = ()=>{
    dispatch(addMovieToWatch({
      loading : true
    }))
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/top_rated?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      dispatch(addMovieToWatch({
        loading : false,
        dataMovieToWatch : res.data
      }))
    }).catch(err=>{
      dispatch(addMovieToWatch({
        loading : false
      }))
      alert(err)
    })
  }
  const getMovieUpComing = ()=>{
    dispatch(addMovieToWatch({
      loading : true
    }))
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/upcoming?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      dispatch(addMovieToWatch({
        loading : false,
        dataMovieToWatch : res.data
      }))
    }).catch(err=>{
      dispatch(addMovieToWatch({
        loading : false
      }))
      alert(err)
    })
  }
  return{
    getMovieTopRated,
    getMovieUpComing
  }
}