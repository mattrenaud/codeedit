import React, { Component } from 'react';
import './Editor.css';

import CodeEditor from './CodeEditor.container';
import SideBar from './SideBar';

class Editor extends Component {
  render() {
    return (
      <div className="Editor d-flex flex-row">
        <CodeEditor />
        <SideBar />
      </div>
    );
  }
}

export default Editor;
