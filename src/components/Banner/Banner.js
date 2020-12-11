import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Banner.scss'
function Banner() {
  const [searchQuery,setSearchQuery]  = useState('')
  // const history = useHistory()
  const handleSubmit = (e)=>{
    e.preventDefault()
    const userText = searchQuery.replace(/^\s+/, '').replace(/\s+$/, '');
    if(userText === ''){
      return
    }
  }
  return (
    <div className="banner">
      <div className="jumbotron jumbotron-fluid">
        <div className="banner_wrapper">
          <h1 className="welcome">Welcome.</h1>
          <p className="desc">Millions of movies, TV shows and people to discover. Explore now.</p>
        </div>
        <div className="banner_search">
          <form className="banner_form" onSubmit={handleSubmit}>
            <input aria-label="input search" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type="text" placeholder="Search for movies,Tv Shows and person"/>
            <button onClick={handleSubmit}>Search</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Banner
