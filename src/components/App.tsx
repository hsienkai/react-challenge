import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import styled from '@emotion/styled'
import Header from './Header'
import SearchBarContainer from './SearchBarContainer'
import SearchResultContainer from './SearchResultContainer'
import FavoriteContainer from './FavoriteContainer'

const App: FC = () => {
  return (
    <Container>
      <Header />
      <SearchBarContainer />
      <SearchResultContainer />
      <Line />
      <FavoriteContainer />
      {/* Happy coding! */}
    </Container>
  )
}

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '560px',
  paddingTop: '60px',
})

const Line = styled.div({
  marginTop: '20px',
  marginButton: '40px',
  border: '1px solid #DADADA'
})
export default hot(App)
