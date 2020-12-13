import React from 'react'
import LazyLoad from 'react-lazyload'
import { useSelector } from 'react-redux'
import { selectDetailBlocks } from '../../../features/movieSlice'
import './MovieDetail.scss'
function MovieDetail() {
  const {details} = useSelector(selectDetailBlocks)
  console.log(details)
  return (
     <div className="movieDetail" style={{backgroundImage : `url(${process.env.REACT_APP_POSTER_URL}${details.backdrop_path})`}} >
     <div className="movieDetail__customBg">
      <div className="movieDetail__content">
        <div className="movieDetail__img">
        <LazyLoad
        width={300}
        height={400}
        debounce={false}
        >
          <img className="max-w-screen-xs rounded-lg" src={`${process.env.REACT_APP_POSTER_URL}${details.poster_path}`} alt=""/>
        </LazyLoad>
        </div>
        <div className="movieDetail__contentText">
          <h1>{details.title}</h1>
          <div className="movieDetail__genre">
          {
            details?.genres?.map((genre,index)=>(
                <p key={genre.id} className="mr-2">{genre.name}</p>
                ))
              }
          </div>
          <strong>Overview</strong>
          <p>{details.overview}</p>
          <strong>Budget</strong>
          <p>$ {details.budget}</p>
          <strong>Vote Average</strong>
          <p>{details.vote_average} of {details.vote_count} people</p>
          <strong>Release Date</strong>
          <p>{details.release_date}</p>
          {
            details?.homepage && <a href={details.homepage} target="_blank" rel="noopener noreferrer"className="watchButton">Watch Now</a>
          }
        </div>
      </div>
    </div> 
  </div>
  )
}

export default MovieDetail
