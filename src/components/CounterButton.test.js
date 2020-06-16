import {shallow} from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render counterButton component', () => {
    const mockColour = 'red';
    expect(shallow(<CounterButton colour = {mockColour}/>)).toMatchSnapshot();
})

it('correctly increments the counter', () => {
    const mockColour = 'red';
    const wrapper = shallow(<CounterButton colour = {mockColour}/>);

    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count: 2}); 
    wrapper.find('[id="counter"]').simulate('keypress');
    expect(wrapper.state()).toEqual({count: 2}); 
    expect(wrapper.props().colour).toEqual('red');
})