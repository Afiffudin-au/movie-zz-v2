import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectSearchResultBlocks, selectUrlParamsBlock } from '../../../features/movieSlice'
import Card from '../../usedAnyComponents/Card/Card';
import { StyledLinearProgress } from '../../extraComponents/LoadingProgress/LoadingProgress'
import './SearchResult.scss'
import { useGetSearch } from '../../../useSearch/useGetSearch'
function SearchResult() {
  const {multiResults,loading,url,totalPages} = useSelector(selectSearchResultBlocks)
  const {query} = useSelector(selectUrlParamsBlock)
  const [pages,setPages] = React.useState(1);
  const {getSearch} = useGetSearch()
  const handleChange = (value)=>{
    setPages(current => current + 1)
    getSearch(query,value)
  }
  useEffect(()=>{
    setPages(1)
  },[query])
  return (
    <div className="searchResult">
      {
        loading &&
        <div className="loading">
          <StyledLinearProgress/>
        </div>
      }
      <div className="searchResultGrid">
      {   
        multiResults.map(multiResults=>(
          multiResults.map((item,index)=>(
            <MemoizedChildComponent
            key={item.id}
            url={url}
            mediaType={item.media_type}
            styleProps={{display : 'block',width : '100%'}} 
            id={item.id}
            releaseDate={item.release_date || item.first_air_date} 
            originalTitle={item.original_title || item.original_name} 
            posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`} 
            voteAverage={item.vote_average || 0}
            />
          ))
        ))
      }
      </div>
      {
        pages < totalPages &&  
        <div className="searchResultPagenation">
          <button onClick={()=>handleChange(pages + 1)}>Load More</button>
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
