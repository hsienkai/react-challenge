import React, { FC } from 'react'
import styled from '@emotion/styled'
import Heart from './Heart'

interface ImageProps {
  url: string,
  width: number,
  height: number,
  favorited: boolean,
  fromSearch: boolean,
  onClick(url: string): any,
}

const Image: React.SFC<ImageProps> = (props) => {
  const icon = props.favorited ? "redHeartIcon" : "whiteHeartIcon"
  const alt = props.favorited ? "red heart icon" : "white heart icon"
  return (
    <Container>
      {props.fromSearch ? <Img
        src={props.url}
        width={props.width}
        height={props.height}
      /> : <ImgFavorite
      src={props.url}
      width={props.width}
      height={props.height}
      />}
      {props.fromSearch ? <HeartWrapper onClick={() => props.onClick(props.url)}>
        <Heart icon={icon} alt={alt} /> </HeartWrapper> : 
        <HeartWrapperFavorite onClick={() => props.onClick(props.url)}>
        <Heart icon={icon} alt={alt} />
      </HeartWrapperFavorite>}
    </Container>
  )
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
