import React from 'react';
import ReactDOM from 'react-dom';
import ChatInput from './ChatInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
