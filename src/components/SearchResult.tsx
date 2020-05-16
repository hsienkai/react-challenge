import React, { FC } from 'react'
import styled from '@emotion/styled'
import Image from './Image'

interface SearchResultProps {
  imageURLs: string[],
  favoriteList: string[],
  favorite(url: string): any,
  unfavorite(url: string): any,
}

const SearchResult: React.SFC<SearchResultProps> = (props) => {
  return props.imageURLs == undefined ? null : generateImages(props.imageURLs, props.favorite, props.unfavorite, props.favoriteList);
}

function generateImages(imageURLs, favorite, unfavorite, favoriteList) {
  const images = []
  imageURLs.forEach((element) => {
    let favorited = favoriteList.includes(element)
    let onClick = favorited ? unfavorite : favorite
    images.push(
      <Image 
        url={element} 
        width={160} 
        height={160} 
        onClick={onClick}
        favorited={favorited}
        fromSearch={true}
      />);
  })
  return (
    <Container>
     {images}
    </Container>
  )
}

const Container = styled.div({
  margin: '0 auto',
  maxHeight: '100%',
  width: '560px',
  paddingTop: '39px',
})

export default SearchResult
