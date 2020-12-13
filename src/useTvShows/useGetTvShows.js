import Axios from "axios"
import { useDispatch } from "react-redux"
import { addTvShow } from "../features/movieSlice"

export function useGetTvShow(){
  const dispatch = useDispatch()
  const getTvPopular = (page)=>{
    dispatch(addTvShow({
      loading : true
    }))
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/popular?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params : {page : page}
    }).then(res=>{
      dispatch(addTvShow({
        loading : false,
        dataTvShows : res.data,
        url : res.config.url
      }))
    }).catch(err=>{
      dispatch(addTvShow({
        loading : false
      }))
      alert(err)
    })
  }
  const getTvAiringToday = (page)=>{
    dispatch(addTvShow({
      loading : true
    }))
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/airing_today?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params : {page : page}
    }).then(res=>{
      dispatch(addTvShow({
        loading : false,
        dataTvShows : res.data,
        url : res.config.url
      }))
    }).catch(err=>{
      dispatch(addTvShow({
        loading : false
      }))
      alert(err)
    })
  }
  const getTvLatest = (page)=>{
    dispatch(addTvShow({
      loading : true
    }))
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/latest?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params : {page : page}
    }).then(res=>{
      dispatch(addTvShow({
        loading : false,
        dataTvShows : res.data,
        url : res.config.url
      }))
    }).catch(err=>{
      dispatch(addTvShow({
        loading : false
      }))
      alert(err)
    })
  }
  const getTvTopRated = (page)=>{
    dispatch(addTvShow({
      loading : true
    }))
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/top_rated?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params : {page : page}
    }).then(res=>{
      dispatch(addTvShow({
        loading : false,
        dataTvShows : res.data,
        url : res.config.url
      }))
    }).catch(err=>{
      dispatch(addTvShow({
        loading : false
      }))
      alert(err)
    })
  }
  return{
    getTvPopular,
    getTvAiringToday,
    getTvLatest,
    getTvTopRated
  }
}