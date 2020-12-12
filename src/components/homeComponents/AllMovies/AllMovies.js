import React, { useEffect, useRef } from 'react'
import { useGetAllMovie } from '../../../useAllMovie/useGetAllMovie'
import Card from '../../Card/Card'
import { StyledLinearProgress } from '../../extraComponents/LoadingProgress/LoadingProgress'
import Pagination from '@material-ui/lab/Pagination';
import './AllMovies.scss'
function AllMovies() {
  const {getAllMovie,loading,dataMovies,url} = useGetAllMovie()
  const refGetAllMovie = useRef(getAllMovie)
  const [pages, setPages] = React.useState(1);
  const {total_pages} = dataMovies
  const handleChange = (event, value) => {
    setPages(value)
    getAllMovie(value)
  };
  useEffect(()=>{
    refGetAllMovie.current()
  },[])
  return (
    <div className="allMovies">
      {
        loading && <StyledLinearProgress/>
      }
      <div className="title">
        <h1>All movies to watch</h1>
      </div>
      <div className="allMoviesGrid">
        {
          dataMovies?.results?.map((item,index)=>(
            <MemoizedChildComponent
            url={url}
            styleProps={{display : 'block',width : '100%'}} 
            id={item.id}
            releaseDate={item.release_date || item.first_air_date} 
            originalTitle={item.original_title || item.original_name} 
            posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`} 
            voteAverage={item.vote_average || 0} key={item.id}
            />
          ))
        }
      </div>
      <div className="allMoviespagenation">
        <Pagination count={total_pages} page={pages} onChange={handleChange} color="primary"/>
      </div>
    </div>
  )
}
function ChildComponent({url,styleProps,id,releaseDate,originalTitle,posterPath,voteAverage}){
  return(
    <Card 
    url={url}
    styleProps={styleProps} 
     id={id} 
     releaseDate={releaseDate} 
     originalTitle={originalTitle}
     posterPath={posterPath} 
     voteAverage={voteAverage} />
  )
}
function compare(prevProps , nextProps){
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}
const MemoizedChildComponent = React.memo(ChildComponent,compare)
export default AllMovies
