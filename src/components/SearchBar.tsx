import React, { FC } from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets'

interface SearchBarProps {
  value: string,
  updateQuery(text: string): any,
  search: any,
}

const SearchBar: React.SFC<SearchBarProps> = (props) => {
  const {updateQuery, value, search} = props;
  
  return (
    <Container>
      <Textfield
        onChange={(e) => updateQuery(e.target.value)}
        value={value} 
      />
      <Button onClick={search}>
        <Icon src={icons["searchIcon"]} alt={"search icon"} />
        Search
      </Button>
    </Container>
  )
}

const Container = styled.div({
  width: '560px',
  marginTop: '40px',
})

const Textfield = styled.input({
  width: '455px',
  height: '36px',
  paddingTop: '8px',
  paddingBottom: '9px',
  paddingLeft: '17px',
  background: '#F7F7F7',
  borderRadius: '4px',
  fontFamily: 'Nunito Sans',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '22px',
  border: 'none'
})

const Button = styled.button({
  width: '105px',
  height: '36px',
  background: '#0794E3',
  borderRadius: '4px',
  fontFamily: 'Nunito Sans',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '14px',
  lineHeight: '19px',
  textAlign: 'center',
  color: '#FFFFFF',
  border: 'none'
})

const Icon = styled.img({
  width: '20px',
  height: '20px',
  marginLeft: '16px',
  float: 'left'
})

export default SearchBar
