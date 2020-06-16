import {shallow} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>);
})

it('render MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'Jaquan',
            email: 'Jaq-Ahmed@hotmail.co.uk'
        }],
        searchField: 'Jaquan',
        isPending: false
    }
    const wrapper2 = wrapper = shallow(<MainPage {...mockProps2}/>);
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'Jaquan',
        email: 'Jaq-Ahmed@hotmail.co.uk'
    }]);
})

it('filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'Jaquan',
            email: 'Jaq-Ahmed@hotmail.co.uk'
        }],
        searchField: 'v',
        isPending: false
    }
    const filteredRobots = [];
    const wrapper3 = wrapper = shallow(<MainPage {...mockProps3}/>);
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
})