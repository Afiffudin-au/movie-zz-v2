import React, { useEffect, useRef } from 'react'
import { useGetAllMovie } from '../../useAllMovie/useGetAllMovie'
import Card from '../Card/Card'
import { StyledLinearProgress } from '../LoadingProgress/LoadingProgress'
import './AllMovies.scss'
function AllMovies() {
  const {getAllMovie,loading,dataMovies} = useGetAllMovie()
  const refGetAllMovie = useRef(getAllMovie)
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
            <Card styleProps={{display : 'block',width : '100%'}} id={item.id} releaseDate={item.release_date || item.first_air_date} originalTitle={item.original_title || item.original_name} posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`} voteAverage={item.vote_average || 0} key={item.id} />
          ))
        }
      </div>
    </div>
  )
}

export default AllMovies
