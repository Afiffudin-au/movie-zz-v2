import React from 'react'
import { useSelector } from 'react-redux'
import { selectTvToWatchBlock } from '../../features/movieSlice'
import Card from '../Card/Card'
import { StyledLinearProgress } from '../LoadingProgress/LoadingProgress'
import './TvToWatchContainer.scss'
function TvToWatchContainer() {
  const {tvToWatch,loading} = useSelector(selectTvToWatchBlock)
  return (
    <>
    {
      loading && 
      <div className="loading">
        <StyledLinearProgress/>
      </div>
    }
    <div className="tvToWatchContainer">
      <div className="tvToWatchContainer-items">
        {
        tvToWatch?.results?.map((item,index)=>(
          <Card id={item.id} releaseDate={item.release_date || item.first_air_date} originalTitle={item.original_title || item.original_name} posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`} voteAverage={item.vote_average || 0} key={item.id} />
        ))
        }
      </div>
    </div>
    </>
  )
}

export default TvToWatchContainer
