import React from 'react';
import './App.css';

import Nav from './Nav';
import Editor from './Editor';

console.log('env', process.env);

const App = () => (
  <div className="App h-100 d-flex flex-column">
    <Nav />
    <Editor />
  </div>
);


export default App;
