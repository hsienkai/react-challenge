import * as React from 'react'
import { shallow } from 'enzyme'
import SearchBarContainer from './SearchBarContainer'
import configureMockStore from 'redux-mock-store'

const initialState = {
  unfavoriteImageAction: jest.fn(),
};
const mockStore = configureMockStore();
const store = mockStore(initialState);

describe('<SearchBarContainer />', () => {
  it('renders without crashing', () => {
    shallow(<SearchBarContainer store={store} />)
  })
})