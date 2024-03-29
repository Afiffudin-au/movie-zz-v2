import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addSearchResult, addUrlParams } from '../../../features/movieSlice'
import { useGetSearch } from '../../../useSearch/useGetSearch'
import './Banner.scss'
function Banner() {
  const [searchQuery, setSearchQuery] = useState('')
  const { getSearch } = useGetSearch()
  const history = useHistory()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    const userText = searchQuery.replace(/^\s+/, '').replace(/\s+$/, '')
    if (userText === '') {
      return
    }
    dispatch(
      addSearchResult({
        removeCopyArray: true,
      })
    )
    getSearch(searchQuery)
    dispatch(
      addUrlParams({
        query: searchQuery,
      })
    )
    history.push('/search-result')
  }
  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <h1 className='welcome'>Welcome.</h1>
        <p className='desc'>
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <div className='banner_search mt-5'>
          <form className='banner_form' onSubmit={handleSubmit}>
            <input
              aria-label='input search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type='text'
              placeholder='Search for movies,Tv Shows and person'
            />
            <button onClick={handleSubmit}>Search</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Banner
