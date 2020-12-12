import Axios from "axios"
import { useDispatch } from "react-redux"
import { addTvToWatch } from "../features/movieSlice"

export function useTvToWatch(){
  const dispatch = useDispatch()
  const getTvTopRated = ()=>{
    dispatch(addTvToWatch({
      loading : true
    }))
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/top_rated?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      dispatch(addTvToWatch({
        loading : false,
        datatvToWatch : res.data,
        url : res.config.url
      }))
    }).catch(err=>{
      dispatch(addTvToWatch({
        loading : false
      }))
      alert(err)
    })
  }
  const getTvAiringToday = ()=>{
    dispatch(addTvToWatch({
      loading : true
    }))
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/airing_today?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      dispatch(addTvToWatch({
        loading : false,
        datatvToWatch : res.data,
        url : res.config.url
      }))
    }).catch(err=>{
      dispatch(addTvToWatch({
        loading : false
      }))
      alert(err)
    })
  }
  return{
    getTvTopRated,getTvAiringToday
  }
}