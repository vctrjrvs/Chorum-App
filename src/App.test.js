import React from 'react';
import ReactDOM from 'react-dom'
// import renderer from 'react-dom-renderer'
import App from './App';

it('renders', () => {
const div = document.createElement('div')
ReactDOM.render(<App />, div)
ReactDOM.unmountComponentAtNode(div)
});