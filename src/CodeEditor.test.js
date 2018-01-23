import React from 'react';
import ReactDOM from 'react-dom';
import CodeEditor from './CodeEditor.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CodeEditor />, div);
  ReactDOM.unmountComponentAtNode(div);
});
