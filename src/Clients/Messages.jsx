import React, { useState } from 'react';
import Navigation from './Navigation.jsx';

export default function Messages() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSend = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    return (
        <div>
            <Navigation />
            <h2 style={{ textAlign: 'center' }}>Messages</h2>

            <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ border: '1px solid #ccc', padding: '1rem', height: '300px', overflowY: 'scroll' }}>
                    {messages.map((msg, index) => (
                        <div key={index} style={{ marginBottom: '0.5rem' }}>{msg}</div>
                    ))}
                </div>

                <div style={{ marginTop: '1rem', display: 'flex' }}>
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        style={{ flex: 1, padding: '0.5rem' }}
                    />
                    <button onClick={handleSend} style={{ padding: '0.5rem 1rem' }}>Send</button>
                </div>
            </div>
        </div>
    );
}
