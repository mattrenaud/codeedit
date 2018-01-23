import React, { Component } from 'react';
import './SideBar.css';

import Language from './Language.container';
import Collaborators from './Collaborators.container';
// import Chat from './Chat';

class SideBar extends Component {
  render() {
    return (
      <div className="SideBar d-flex flex-column p-4">
        <Language />
        <Collaborators />
        {/* <Chat /> */}
      </div>
    );
  }
}

export default SideBar;
