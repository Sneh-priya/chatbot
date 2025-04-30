// src/App.jsx
import React from 'react';
import ChatBox from './components/ChatBox';
import { sendMessageToBot } from './api';

const App = () => {
  return (
    <div className="App">
      <h1>Gemini Chatbot</h1>
      <ChatBox sendMessage={sendMessageToBot} />
    </div>
  );
};

export default App;

