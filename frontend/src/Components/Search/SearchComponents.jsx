import React from 'react'
import "./SearchComponent.css"

const SearchComponents = () => {
  return (
    <div className='searchContainer'>
        <div className='px-3 pb-5'>
            <h1 className="text-center">Search Components</h1><br/>
            <input className='searchInput' type='text' placeholder='search.....'></input>
        </div>
    </div>
  )
}

export default SearchComponents