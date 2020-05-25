import React, { FC } from 'react'
import styled from '@emotion/styled'
import Heart from './Heart'

interface ImageProps {
  url: string,
  width: number,
  height: number,
  favorited: boolean,
  fromSearch: boolean,
  onClick(url: string): void,
}

const Image: React.SFC<ImageProps> = (props) => {
  const { url, width, height, favorited, fromSearch, onClick } = props
  const icon = favorited ? "redHeartIcon" : "whiteHeartIcon"
  const alt = favorited ? "red heart icon" : "white heart icon"
  if (fromSearch) {
    return (
      <Container>
        <Img
          src={url}
          width={width}
          height={height}
        />
        <HeartWrapper onClick={() => onClick(url)}>
          <Heart 
            icon={icon} 
            alt={alt} 
          /> 
        </HeartWrapper>
      </Container> 
    )
  } else {
    return (
      <Container>
        <ImgFavorite
          src={url}
          width={width}
          height={height}
        />
        <HeartWrapperFavorite onClick={() => onClick(url)}>
          <Heart 
            icon={icon} 
            alt={alt} 
          /> 
        </HeartWrapperFavorite>
      </Container>
    ) 
  }
}

const Container = styled.div({
  display: 'inline-block',
})

const HeartWrapper = styled.div({
  width: '22px',
  position: 'relative',
  top: '-40px',
  left: '150px',
})

const HeartWrapperFavorite = styled.div({
  width: '22px',
  position: 'relative',
  top: '-40px',
  left: '110px',
})

const Img = styled.img({
  margin: '12px',
  background: '#C4C4C4',
  borderRadius: '4px',
})

const ImgFavorite = styled.img({
  margin: '6px',
  background: '#C4C4C4',
  borderRadius: '4px',
})

  export default Image
