// src/components/ChatBox.jsx
import React, { useState, useRef, useEffect } from 'react';
import '../App.css';

const ChatBox = ({ sendMessage }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    const response = await sendMessage(input);
    const botMessage = { sender: 'bot', text: response };

    setMessages((prev) => [...prev, botMessage]);
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-header">🤖 Gemini Chatbot</div>
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message-row ${msg.sender}`}>
            {msg.sender === 'bot' && (
              <div className="avatar">🤖</div>
            )}
            <div className={`message-bubble ${msg.sender}`}>
              {msg.text}
            </div>
            {msg.sender === 'user' && (
              <div className="avatar user-avatar">🧑</div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
