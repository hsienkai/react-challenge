import * as React from 'react'
import { shallow } from 'enzyme'
import FavoriteContainer from './FavoriteContainer'
import configureMockStore from 'redux-mock-store'

const initialState = {
  unfavoriteImageAction: jest.fn(),
  favoriteList: ['fisrt', 'second']
};
const mockStore = configureMockStore();
const store = mockStore(initialState);

describe('<FavoriteContainer />', () => {
  it('renders without crashing', () => {
    shallow(<FavoriteContainer store={store} />)
  })
})