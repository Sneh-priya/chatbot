import React from 'react';
import ChatBox from './components/ChatBox';

function App() {
  const sendMessage = async (inputText) => {
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputText })
      });

      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error('Error:', error);
      return 'Sorry, I could not connect to the server.';
    }
  };

  return <ChatBox sendMessage={sendMessage} />;
}

export default App;
