import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Favorite from './Favorite'
import { unfavoriteImage } from '../redux/actions';

export default () => {
  const favoriteList = useSelector((state) => state.favoriteList)
  const dispatch = useDispatch();

  function unfavorite(url) {
    dispatch(unfavoriteImage(url))
  }

  return(
    <Favorite 
      favoriteList= {favoriteList}
      unfavorite= {unfavorite}
    />    
  )
}
