
import React from 'react'
import { useSelector } from 'react-redux'
import { selectMovieToWatchBlocks } from '../../../features/movieSlice'
import { StyledLinearProgress } from '../../extraComponents/LoadingProgress/LoadingProgress'
import Card from '../../usedAnyComponents/Card/Card';
import './MovieToWatchContainer.scss'
function MovieToWatchContainer() {
  const {movieToWatch,loading,url} = useSelector(selectMovieToWatchBlocks)
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
            <Card url={url} id={item.id} releaseDate={item.release_date || item.first_air_date} originalTitle={item.original_title || item.original_name} posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`} voteAverage={item.vote_average || 0} key={item.id} />
          ))
        }
      </div>
    </div>
    </>
  )
}

export default MovieToWatchContainer
