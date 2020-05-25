import * as React from 'react'
import { shallow, mount } from 'enzyme'
import Image from './Image'

describe('<Image />', () => {
  let mockProps = {
    url: 'someUrl',
    width: 100,
    height: 100,
    favorited: false,
    fromSearch: false,
    onClick: jest.fn(),
  }

  it('renders without crashing', () => {
    shallow(<Image {...mockProps} />)
  })

  it('renders with correct url', () => {
    const wrapper = mount(<Image {...mockProps} />)
    expect(wrapper.props().url).toBe(mockProps.url)
  })

  it('renders with correct size', () => {
    const wrapper = mount(<Image {...mockProps} />)
    expect(wrapper.props().width).toBe(mockProps.width)
    expect(wrapper.props().height).toBe(mockProps.height)
  })

  it('renders without crashing when it is favorited', () => {
    mockProps.favorited = true
    shallow(<Image {...mockProps} />)
  })

  it('renders without crashing when it is fromSearch', () => {
    mockProps.fromSearch = true
    shallow(<Image {...mockProps} />)
  })

  it('calls onClick when heart is clicked', () => {
    const wrapper = mount(<Image {...mockProps} />)
    wrapper.find('div').at(1).simulate('click');
    expect(mockProps.onClick).toHaveBeenCalledWith(mockProps.url)
  })
  
})