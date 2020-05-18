import * as React from 'react'
import { shallow } from 'enzyme'
import Favorite from './Favorite'

describe('<Favorite />', () => {
  let mockProps = {
    favoriteList: ['first', 'second'],
    unfavorite: jest.fn()
  }

  it('renders when favoriteList is not undefined', () => {
    shallow(<Favorite {...mockProps} />)
  })

  it('renders when favoriteList is undefined', () => {
    mockProps.favoriteList = undefined
    shallow(<Favorite {...mockProps} />)
  })

  it('renders the correct favoriteList', () => {
    const wrapper = shallow(<Favorite {...mockProps} />)
    expect(wrapper.prop('favoriteList')).toBe(mockProps.favoriteList)
  })
})