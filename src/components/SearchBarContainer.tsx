import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import SearchBar from './SearchBar'
import { fetchImages } from '../redux/actions';

export default () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("")
  
  function search() {
    dispatch(fetchImages(query))
  }

  return(
    <SearchBar 
      value= {query}
      updateQuery= {setQuery}
      search= {search}
    />
  )
}
