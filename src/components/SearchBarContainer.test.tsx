import * as React from 'react'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import SearchBarContainer from './SearchBarContainer'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore();
const store = mockStore();

describe('<SearchBarContainer />', () => {
  it('renders without crashing', () => {
    shallow(<Provider store={store}><SearchBarContainer /></Provider>)
  })
})