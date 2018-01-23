import React, { Component } from 'react';
import './ChatInput.css';

class ChatInput extends Component {
  render() {
    return (
      <div className="ChatInput d-flex flex-row p-3">
        <input className="form-control mr-3" type="text" />
        <button className="btn btn-outline-primary">Send</button>
      </div>
    );
  }
}

export default ChatInput;
