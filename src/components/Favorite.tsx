import React, { FC } from 'react'
import styled from '@emotion/styled'
import Image from './Image'
import Heart from './Heart'

interface FavoriteProps {
  favoriteList: string[],
  unfavorite(url: string): any,
}

const Favorite: React.SFC<FavoriteProps> = (props) => {
  return props.favoriteList == undefined ? null : generateImages(props.unfavorite, props.favoriteList);
}

function generateImages(unfavorite, favoriteList) {
  const images = []
  favoriteList.forEach((element) => {
    images.push(
      <Image 
        url={element} 
        width={128} 
        height={128} 
        onClick={unfavorite}
        favorited={true}
        fromSearch={false}
      />);
  })
  return (
    <Container>
      <Title>
        <Heart icon="redHeartIcon" alt="red heart icon" />
        <Header>Favorites</Header>
      </Title>
      {images}
    </Container>
  )
}

const Container = styled.div({
  margin: '0 auto',
  maxHeight: '100%',
  width: '560px',
  paddingTop: '60px',
  marginBottom: '144px'
})

const Title = styled.h1({
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '33px',
  marginBottom: '40px'
})

const Header = styled.span({
  marginLeft: '25.27px'
})

export default Favorite
