// src/api.js

export async function sendMessageToBot(message) {
    // Simulate Gemini API response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`You said: "${message}" and this is a fake Gemini reply 😄`);
      }, 1000);
    });
  }
  