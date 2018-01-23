import React from 'react';
import ReactDOM from 'react-dom';
import Collaborators from './Collaborators.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Collaborators />, div);
  ReactDOM.unmountComponentAtNode(div);
});
