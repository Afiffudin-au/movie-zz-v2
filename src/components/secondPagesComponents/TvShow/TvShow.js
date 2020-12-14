import React from 'react'
import './TvShow.scss'
import Card from '../../usedAnyComponents/Card/Card'
import { selectTvShowBlocks } from '../../../features/movieSlice'
import { useSelector } from 'react-redux'
import Pagination from '@material-ui/lab/Pagination';
import { StyledLinearProgress } from '../../extraComponents/LoadingProgress/LoadingProgress'
import { useGetTvShow } from '../../../useTvShows/useGetTvShows'
function TvShow() {
  const {getTvPopular,getTvAiringToday,getTvLatest,getTvTopRated} = useGetTvShow()
  const {tvShows,loading,url} = useSelector(selectTvShowBlocks)
  const [pages,setPages] = React.useState(1);
  const {total_pages} = tvShows
  const handleChange = (event, value) => {
    setPages(value)
    if(url === process.env.REACT_APP_TV_POPULAR){
      getTvPopular(value)
    }else if(url === process.env.REACT_APP_TV_AIRING_TODAY){
      getTvAiringToday(value)
    }else if(url === process.env.REACT_APP_TV_LATEST){
      getTvLatest(value)
    }else{
      getTvTopRated(value)
    }
  };
  return (
    <div className="TvShow">
      {
        loading && <StyledLinearProgress/>
      }
      <div className="TvShowGrid">
      {
          tvShows?.results?.map((item,index)=>(
            <Card
            url={url}
            mediaType={item.media_type}
            styleProps={{display : 'block',width : '100%'}} 
            id={item.id}
            releaseDate={item.release_date || item.first_air_date} 
            originalTitle={item.original_title || item.original_name} 
            posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`} 
            voteAverage={item.vote_average || 0} key={item.id}
            />
          ))
        }
      </div>
      {
        !loading &&  
        <div className="TvShowPagenation">
          <Pagination count={total_pages} page={pages} onChange={handleChange} color="primary"/>
        </div>
      }
    </div>
  )
}
export default TvShow
