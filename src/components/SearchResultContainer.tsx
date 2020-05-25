import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchResult from './SearchResult'
import { fetchImages, favoriteImage, unfavoriteImage } from '../redux/actions';

export default () => {
  const imageURLs = useSelector((state) => state.imageURLs)
  const favoriteList = useSelector((state) => state.favoriteList)
  const dispatch = useDispatch();
  const [hasRendered, setHasRendered] = useState(false)

  useEffect(() => setHasRendered(true), [hasRendered]); {
    if (!hasRendered) {
      dispatch(fetchImages())
    }
  }

  function favoriteImageAction(url) {
    dispatch(favoriteImage(url))
  }

  function unfavoriteImageAction(url) {
    dispatch(unfavoriteImage(url))
  }

  return(
    <SearchResult 
      imageURLs= {imageURLs}
      favoriteList= {favoriteList}
      favorite= {favoriteImageAction}
      unfavorite= {unfavoriteImageAction}
    />
  )
}
