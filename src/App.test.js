import React from 'react';
import App from './App';

//test('renders learn react link', () => {
//  const { getByText } = render(<App />);
//  const linkElement = getByText(/learn react/i);
//  expect(linkElement).toBeInTheDocument();
//});

import { shallow } from 'enzyme';
import Login from './Login';
describe('Test case for testing login',() =>{
let wrapper;
test('username check',()=>
{
wrapper = shallow(<Login/>);
wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'hunnybalani26@gmail.com'}});
expect(wrapper.state('email')).toEqual('hunnybalani26@gmail.com');
})
it('password check',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'Chotumotu@17'}});
expect(wrapper.state('password')).toEqual('Chotumotu@17');
})
it('login check with right data',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'hunnybalani26@gmail.com'}});
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'Chotumotu@17'}});
wrapper.find('button').at(0).simulate('click');
expect(wrapper.state('isLogined')).toBe(true);
})
it('login check with wrong data',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'hunnybalani26@gmail.com'}});
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'Chotumotu@09'}});
wrapper.find('button').at(0).simulate('click');
expect(wrapper.state('isLogined')).toBe(false);
})
})