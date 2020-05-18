import * as React from 'react'
import { shallow } from 'enzyme'
import SearchResultContainer from './SearchResultContainer'
import configureMockStore from 'redux-mock-store'

const initialState = {
  fetchImagesAction: jest.fn(),
  favoriteImageAction: jest.fn(),
  unfavoriteImageAction: jest.fn(),
  imageURLs: ['first', 'second'],
  favoriteList: ['third', 'fourth']
};
const mockStore = configureMockStore();
const store = mockStore(initialState);

describe('<SearchResultContainer />', () => {
  it('renders without crashing', () => {
    shallow(<SearchResultContainer store={store} />)
  })
})