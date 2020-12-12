import React from 'react'
import LazyLoad from 'react-lazyload'
import './MovieDetail.scss'
function MovieDetail() {
  return (
    <div className="movieDetail" style={{backgroundImage : `url(${process.env.REACT_APP_POSTER_URL}${movieDetails.backdrop_path})`}} >
    <div className="movieDetail__customBg">
      <div className="movieDetail__content">
        <div className="movieDetail__img">
        <LazyLoad
        width={300}
        height={400}
        debounce={false}
        >
          <img className="max-w-screen-xs rounded-lg" src={`${process.env.REACT_APP_POSTER_URL}${movieDetails.poster_path}`} alt=""/>
        </LazyLoad>
        </div>
        <div className="movieDetail__contentText">
          <h1>{movieDetails.title}</h1>
          <div className="movieDetail__genre">
          {
            movieDetails?.genres?.map((genre,index)=>(
                <p key={genre.id} className="mr-2">{genre.name}</p>
                ))
              }
          </div>
          <strong>Overview</strong>
          <p>{movieDetails.overview}</p>
          <strong>Budget</strong>
          <p>$ {movieDetails.budget}</p>
          <strong>Vote Average</strong>
          <p>{movieDetails.vote_average} of {movieDetails.vote_count} people</p>
          <strong>Release Date</strong>
          <p>{movieDetails.release_date}</p>
          {
            movieDetails?.homepage && <a href={movieDetails.homepage} target="_blank" rel="noopener noreferrer"className="bg-blue-500 px-2 py-2 rounded shadow-2xl outline-none font-semibold hover:bg-blue-600">Watch Now</a>
          }
        </div>
      </div>
    </div>
  </div>
  )
}

export default MovieDetail
