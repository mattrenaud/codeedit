import React from 'react';
import ReactDOM from 'react-dom';
import Language from './Language.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Language />, div);
  ReactDOM.unmountComponentAtNode(div);
});
