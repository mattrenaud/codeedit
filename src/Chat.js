import React, { Component } from 'react';
import './Chat.css';

import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

class Chat extends Component {
  render() {
    return (
      <div className="Chat d-flex flex-column">
        <label>Chat</label>
        <div className="chat-area d-flex flex-column">
          <ChatWindow />
          <ChatInput />
        </div>
      </div>
    );
  }
}

export default Chat;
