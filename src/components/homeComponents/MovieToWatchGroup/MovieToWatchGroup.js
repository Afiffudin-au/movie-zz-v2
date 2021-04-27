import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import React, { useEffect, useRef } from 'react'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import './MovieToWatchGroup.scss'
import { useGetMovieToWatch } from '../../../useMovieToWatch/useGetMovieToWatch'
import MovieToWatchContainer from '../MovieToWatchContainer/MovieToWatchContainer'
function MovieToWatchGroup() {
  const [value, setValue] = React.useState(0)
  const { getMovieTopRated, getMovieUpComing } = useGetMovieToWatch()
  const refGetMovieTopRated = useRef(getMovieTopRated)
  useEffect(() => {
    refGetMovieTopRated.current()
  }, [])
  return (
    <div className='movieToWatchGroup'>
      <div className='movieToWatchGroupWrap'>
        <h1>Movies to watch</h1>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          showLabels
          style={{ width: '320px' }}>
          <BottomNavigationAction
            onClick={getMovieTopRated}
            label='Top Rated'
            icon={<StarIcon />}
          />
          <BottomNavigationAction
            onClick={getMovieUpComing}
            label='Upcoming'
            icon={<AccessTimeIcon />}
          />
        </BottomNavigation>
      </div>
      <MovieToWatchContainer />
    </div>
  )
}

export default MovieToWatchGroup
