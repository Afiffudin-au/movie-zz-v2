import Axios from "axios"
import { useDispatch } from "react-redux"
import { addSearchResult } from "../features/movieSlice"

export function useGetSearch(){
  const dispatch = useDispatch()
  const getSearch = (query,page)=>{
    dispatch(addSearchResult({
      loading : true
    }))
    Axios({
      method : 'GET',
      url : 'https://api.themoviedb.org/3/search/multi?api_key=f59a67c847f06eb38cff7065821c1fd9',
      params: {query : query,page : page}
    }).then(res=>{
      if(res.data.total_results === 0){
        alert(`Sorry we cannot find ${query}`)
        dispatch(addSearchResult({
          loading : false,
          dataMultiSearch : []
        }))
        return
      }
      dispatch(addSearchResult({
        loading : false,
        dataMultiSearch : res.data,
      }))
    }).catch(err=>{
      dispatch(addSearchResult({
        loading : false
      }))
      alert(err)
    })
  }
  return{
    getSearch
  }
}