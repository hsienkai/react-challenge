import * as React from 'react'
import { shallow, mount } from 'enzyme'
import SearchBar from './SearchBar'

describe('<SearchBar />', () => {
  let mockProps = {
    value: 'some text',
    updateQuery: jest.fn(),
    search: jest.fn()
  }

  it('renders without crashing', () => {
    shallow(<SearchBar {...mockProps} />)
  })

  it('renders with correct value', () => {
    const wrapper = mount(<SearchBar {...mockProps} />)
    expect(wrapper.props().value).toEqual(mockProps.value)
  })

  it('calls updateQuery when search input changes', () => {
    const wrapper = mount(<SearchBar {...mockProps} />)
    wrapper.find('input').simulate('change', { target: { value: 'new query' } })
    expect(mockProps.updateQuery).toHaveBeenCalledWith('new query')
  })

  it('calls search when search button is clicked', () => {
    const wrapper = mount(<SearchBar {...mockProps} />)
    wrapper.find('button').simulate('click');
    expect(mockProps.search).toHaveBeenCalled()
  })

})