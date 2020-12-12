import Axios from "axios"
import { useDispatch } from "react-redux"
import { addDetail } from "../features/movieSlice"
export function useGetDetail(){
  const dispatch = useDispatch()
  const getDetail = (movie_id,URL,mediaType)=>{
    dispatch(addDetail({
      loading : true
    }))
    const urlSplit = URL?.split('popular',1)
    .join('').split('now_playing',1)
    .join('').split('upcoming',1)
    .join('').split('top_rated',1)
    .join('').split('airing_today',1)
    .join('').split('search/multi',1)
    let url = ''
    if(mediaType){
      url = `https://api.themoviedb.org/3/${mediaType}/${movie_id}?api_key=f59a67c847f06eb38cff7065821c1fd9`
    }else{
      url = `${urlSplit}${movie_id}?api_key=f59a67c847f06eb38cff7065821c1fd9`
    }
    Axios({
      method : 'GET',
      url : url
    }).then(res=>{
      dispatch(addDetail({
        loading : false,
        dataDetails : res.data
      }))
    }).catch(err=>{
      dispatch(addDetail({
        loading : false
      }))
      alert(err)
    })
  }
  return{
    getDetail
  }
}