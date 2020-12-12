import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addUrlParams } from '../../../features/movieSlice'
import { useGetSearch } from '../../../useSearch/useGetSearch'
import './NavbarSearch.scss'
function NavbarSearch() {
  const [query,setQuery] = useState('')
  const {getSearch} = useGetSearch()
  const history = useHistory()
  const dispatch = useDispatch()
  const handleSearch = (e) => {
    e.preventDefault()
    const userText = query.replace(/^\s+/, '').replace(/\s+$/, '');
    if(userText === ''){
      return
    }
    getSearch(query)
    dispatch(addUrlParams({
      query : query
    }))
    history.push('/search-result')
  }
  return (
    <>
      <form onSubmit={handleSearch} className="form-inline my-2 my-lg-0">
        <input value={query || ''} onChange={(e)=>setQuery(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search and enter" aria-label="Search" />
        <button style={{ display: 'none' }}></button>
      </form>
    </>
  )
}

export default NavbarSearch
