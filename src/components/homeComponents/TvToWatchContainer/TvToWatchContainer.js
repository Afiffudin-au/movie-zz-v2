import React from 'react'
import { useSelector } from 'react-redux'
import { selectTvToWatchBlocks } from '../../../features/movieSlice'
import Card from '../../any/Card/Card'
import { StyledLinearProgress } from '../../extraComponents/LoadingProgress/LoadingProgress'
import './TvToWatchContainer.scss'
import HorizontalContainer from '../HorizontalContainer/HorizontalContainer'
function TvToWatchContainer() {
  const { tvToWatch, loading, url } = useSelector(selectTvToWatchBlocks)
  return (
    <>
      {loading && (
        <div className='loading'>
          <StyledLinearProgress />
        </div>
      )}
      <HorizontalContainer>
        {tvToWatch?.results?.map((item, index) => (
          <Card
            url={url}
            id={item.id}
            releaseDate={item.release_date || item.first_air_date}
            originalTitle={item.original_title || item.original_name}
            posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`}
            voteAverage={item.vote_average || 0}
            key={item.id}
          />
        ))}
      </HorizontalContainer>
    </>
  )
}

export default TvToWatchContainer
