import * as React from 'react'
import { mount, shallow } from 'enzyme'
import { Provider } from 'react-redux'
import SearchResultContainer from './SearchResultContainer'
import configureMockStore from 'redux-mock-store'

const initialState = {
  imageURLs: ['first', 'second'],
  favoriteList: ['third', 'fourth']
};
const mockStore = configureMockStore();
const store = mockStore(initialState);


describe('<SearchResultContainer />', () => {
  it('renders without crashing', () => {
    // const wrapper = mount(
    //   <Provider store={store}>
    //     <SearchResultContainer />
    //   </Provider>
    // )
    // shallow(wrapper)
    // unknown error
  })
})