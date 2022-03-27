import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from "pusher-js";
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response =>{
      setMessages(response.data);
    })
  }, [])

  useEffect(()=>{
    var pusher = new Pusher('224a6cf6a619be612ce4', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages])
  console.log(messages);
  return (
    <div className="app">
      <div className='app_body'>
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
      
    </div>
  );
}

export default App;
