import Axios from "axios"
import { useState } from "react"

export function useGetAllMovie(){
  const [dataMovies,setDataMovies] = useState([])
  const [loading,setLoading] = useState(true)
  const getAllMovie = (showMore)=>{
    setLoading(true)
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/movie/popular?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {page : showMore}
    }).then(res=>{
      setLoading(false)
      setDataMovies(res.data)
    }).catch(err=>{
      setLoading(false)
      alert(err)
    })
  }
  return{
    getAllMovie,
    loading,
    dataMovies
  }
}