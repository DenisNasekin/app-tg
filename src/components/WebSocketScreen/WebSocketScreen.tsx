import React, { useEffect, useState } from "react";

import './WebSocketScreen.css';
import Menu from "../Menu/Menu";



const WebSocketScreen: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
      const socket = new WebSocket('wss://echo.websocket.org');
      socket.onopen = () => {
        socket.send('This app for telegram');
      };
      socket.onmessage = (event) => {    
        setMessage(event.data);
      };

      socket.onerror = (event) => {
        console.log('error', event);
      };

      return () => {
        socket.close = () => {
        };
      };
    }, []);
    
    return (
      <section className="sectionWebSocket">
        <h1 className="sectionWebSocket__title">Welcome to team</h1>
        <p className="sectionWebSocket__text">{message}</p>
      </section>
    );
};
  
export default WebSocketScreen;