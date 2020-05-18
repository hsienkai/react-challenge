import * as React from 'react'
import { shallow, mount } from 'enzyme'
import SearchResult from './SearchResult'

describe('<SearchResult />', () => {
  let mockProps = {
    imageURLs: ['first', 'second'],
    favoriteList: ['third', 'fourth'],
    unfavorite: jest.fn(),
    favorite: jest.fn()
  }

  it('renders when imageURLs is not undefined', () => {
    shallow(<SearchResult {...mockProps} />)
  })

  it('renders the correct imageURLs', () => {
    const wrapper = mount(<SearchResult {...mockProps} />)
    expect(wrapper.props().imageURLs).toBe(mockProps.imageURLs)
  })

  it('renders the correct favoriteList', () => {
    const wrapper = mount(<SearchResult {...mockProps} />)
    expect(wrapper.props().favoriteList).toBe(mockProps.favoriteList)
  })

  it('renders when favoriteList is undefined', () => {
    mockProps.imageURLs = undefined
    shallow(<SearchResult {...mockProps} />)
  })
})