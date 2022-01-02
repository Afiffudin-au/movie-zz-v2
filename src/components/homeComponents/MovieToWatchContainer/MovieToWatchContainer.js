import React from 'react'
import { useSelector } from 'react-redux'
import { selectMovieToWatchBlocks } from '../../../features/movieSlice'
import { StyledLinearProgress } from '../../extraComponents/LoadingProgress/LoadingProgress'
import Card from '../../any/Card/Card'
import HorizontalContainer from '../HorizontalContainer/HorizontalContainer'
import './MovieToWatchContainer.scss'
function MovieToWatchContainer() {
  const { movieToWatch, loading, url } = useSelector(selectMovieToWatchBlocks)
  return (
    <>
      {loading && (
        <div className='loading'>
          <StyledLinearProgress />
        </div>
      )}
      <HorizontalContainer>
        {movieToWatch?.results?.map((item, index) => (
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

export default MovieToWatchContainer
