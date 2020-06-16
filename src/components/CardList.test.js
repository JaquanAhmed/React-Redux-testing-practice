import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render cardlist component', () => {
    const mockRobot = [
        {
            id: 1,
            name: 'Jaquan Ahmed',
            email: 'Jaq-Ahmed@hotmail.co.uk'
        }
    ]
    expect(shallow(<CardList robots = {mockRobot}/>)).toMatchSnapshot();
})