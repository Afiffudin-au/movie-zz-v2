import React from 'react'
import './Movie.scss'
import { useSelector } from 'react-redux'
import { selectMoviesBlocks } from '../../../features/movieSlice'
import Card from '../../any/Card/Card'
import Pagination from '@material-ui/lab/Pagination'
import { StyledLinearProgress } from '../../extraComponents/LoadingProgress/LoadingProgress'
import { useGetMovies } from '../../../useMovies/useGetMovies'
function Movie() {
  const {
    getMoviePopular,
    getMovieNowPlaying,
    getMovieUpcoming,
    getMovieTopRated,
  } = useGetMovies()
  const { movies, loading, url } = useSelector(selectMoviesBlocks)
  const [pages, setPages] = React.useState(1)
  const total_pages = movies.total_pages > 100 ? 100 : movies.total_pages // limit total pages
  const handleChange = (event, value) => {
    if (value > total_pages) {
      return
    }
    setPages(value)
    if (url === process.env.REACT_APP_MOVIE_POPULAR_URL) {
      getMoviePopular(value)
    } else if (url === process.env.REACT_APP_MOVIE_PLAYING) {
      getMovieNowPlaying(value)
    } else if (url === process.env.REACT_APP_MOVIE_UPCOMING) {
      getMovieUpcoming(value)
    } else {
      getMovieTopRated(value)
    }
  }
  return (
    <div className='Movie'>
      {loading && <StyledLinearProgress />}
      <div className='MovieGrid'>
        {movies?.results?.map((item, index) => (
          <Card
            url={url}
            mediaType={item.media_type}
            styleProps={{ display: 'block', width: '100%' }}
            id={item.id}
            releaseDate={item.release_date || item.first_air_date}
            originalTitle={item.original_title || item.original_name}
            posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`}
            voteAverage={item.vote_average || 0}
            key={item.id}
          />
        ))}
      </div>
      {!loading && (
        <div className='MoviePagenation'>
          <Pagination
            count={total_pages}
            page={pages}
            onChange={handleChange}
            color='primary'
          />
        </div>
      )}
    </div>
  )
}
export default Movie
