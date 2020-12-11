import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './NavbarSearch.scss'
function NavbarSearch() {
  const [query,setQuery] = useState('')
  // const history = useHistory()
  const handleSearch = (e) => {
    e.preventDefault()
    const userText = query.replace(/^\s+/, '').replace(/\s+$/, '');
    if(userText === ''){
      return
    }
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
