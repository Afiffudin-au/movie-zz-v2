
import React from 'react'
import { useSelector } from 'react-redux'
import { selectMovieToWatchBlock } from '../../features/movieSlice'
import { StyledLinearProgress } from '../LoadingProgress/LoadingProgress'
import Card from '../Card/Card'
import './MovieToWatchContainer.scss'
function MovieToWatchContainer() {
  const {movieToWatch,loading} = useSelector(selectMovieToWatchBlock)
  console.log(movieToWatch)
  return (
    <>
    {
      loading && 
      <div className="loading">
        <StyledLinearProgress/>
      </div>
    }
    <div className="movieToWatchContainer">
      <div className="movieToWatchContainer-items">
        {
          movieToWatch?.results?.map((item,index)=>(
            <Card id={item.id} releaseDate={item.release_date || item.first_air_date} originalTitle={item.original_title || item.original_name} posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`} key={item.id} />
          ))
        }
      </div>
    </div>
    </>
  )
}

export default MovieToWatchContainer
