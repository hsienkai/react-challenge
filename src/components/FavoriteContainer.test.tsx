import * as React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import FavoriteContainer from './FavoriteContainer'
import configureMockStore from 'redux-mock-store'

const initialState = {
  favoriteList: ['fisrt', 'second']
};
const mockStore = configureMockStore();
const store = mockStore(initialState);

describe('<FavoriteContainer />', () => {
  it('renders without crashing', () => {
    shallow(<Provider store={store}><FavoriteContainer /></Provider>)
  })
})