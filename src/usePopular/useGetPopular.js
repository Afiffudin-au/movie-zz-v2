import Axios from 'axios'

export function useGetPopular(){
  const getMoviePopular = ()=>{
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/popular?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      console.log(res.data)
    }).catch(err=>{
      alert(err)
    })
  }
  const getTvPopular = ()=>{
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/tv/popular?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      console.log(res.data)
    }).catch(err=>{
      alert(err)
    })
  }
  const getMoviePopularInTheater = ()=>{
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/now_playing?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : 1}
    }).then(res=>{
      console.log(res.data)
    }).catch(err=>{
      alert(err)
    })
  }
  return{
    getMoviePopular,
    getTvPopular,
    getMoviePopularInTheater
  }
}