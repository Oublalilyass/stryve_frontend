// utils/webSocket.js
export const setupWebSocket = (setTexts) => {
  const socket = new WebSocket('ws://localhost:3308'); //  WebSocket server URL

  socket.onmessage = (event) => {
    const updatedTexts = JSON.parse(event.data);
    setTexts(updatedTexts);
  };

  socket.onopen = () => {
    console.log('WebSocket connection established.');
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  socket.onclose = () => {
    console.log('WebSocket connection closed.');
  };

  return socket;
};
