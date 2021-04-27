import React from 'react'
import { useSelector } from 'react-redux'
import { StyledLinearProgress } from '../../extraComponents/LoadingProgress/LoadingProgress'
import './PopularContainer.scss'
import { selectPopularBlocks } from '../../../features/movieSlice'
import Card from '../../usedAnyComponents/Card/Card'
import HorizontalContainer from '../HorizontalContainer/HorizontalContainer'
function PopularContainer() {
  const { populars, loading, url } = useSelector(selectPopularBlocks)
  return (
    <>
      {loading && (
        <div className='loading'>
          <StyledLinearProgress />
        </div>
      )}
      <HorizontalContainer>
        {populars?.results?.map((item, index) => (
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

export default PopularContainer
