import React, { useState } from 'react'

const Search = () => {
const [search, setSearch] = useState("")

const handleSearch = (e) => {
  setSearch(e.target.value)
}

  return (
    <div className='navbar_input'>
    <nav>
          <form method='GET' action='/search'>
            <input placeholder='Search....' type='search' name='searchTerm' onChange={(e) => handleSearch(e)} className='search_input'/>
          </form>
    </nav>
      </div>
  )
}

export default Search
