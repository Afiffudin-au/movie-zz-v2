import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectSearchResultBlocks, selectUrlParamsBlock } from '../../../features/movieSlice'
import Card from '../../usedAnyComponents/Card/Card';
import { StyledLinearProgress } from '../../extraComponents/LoadingProgress/LoadingProgress'
import './SearchResult.scss'
import Pagination from '@material-ui/lab/Pagination';
import { useGetSearch } from '../../../useSearch/useGetSearch'
function SearchResult() {
  const {multiResults,loading,url} = useSelector(selectSearchResultBlocks)
  const {query} = useSelector(selectUrlParamsBlock)
  const [pages,setPages] = React.useState(1);
  const {total_pages} = multiResults
  const {getSearch} = useGetSearch()
  const handleChange = (event, value) => {
    setPages(value)
    getSearch(query,value)
  };
  useEffect(()=>{
    setPages(1)
  },[query])
  console.log(total_pages)
  return (
    <div className="searchResult">
      {
        loading && <StyledLinearProgress/>
      }
      <div className="searchResultGrid">
      {
          multiResults?.results?.map((item,index)=>(
            <MemoizedChildComponent
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
        <div className="searchResultPagenation">
          <Pagination count={total_pages} page={pages} onChange={handleChange} color="primary"/>
        </div>
      }
    </div>
  )
}
function ChildComponent({url,mediaType,styleProps,id,releaseDate,originalTitle,posterPath,voteAverage}){
  return(
    <Card 
     url={url}
     mediaType={mediaType}
     styleProps={styleProps} 
     id={id} 
     releaseDate={releaseDate} 
     originalTitle={originalTitle}
     posterPath={posterPath} 
     voteAverage={voteAverage} />
  )
}
function compare(prevProps , nextProps){
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}
const MemoizedChildComponent = React.memo(ChildComponent,compare)
export default SearchResult