import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { Send, User } from 'lucide-react';

const Chat = () => {
  const { messages, sendMessage, users } = useAppContext();
  const [text, setText] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    sendMessage(text);
    setText('');
  };

  return (
    <div className="page-container" style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      {/* Messages Area */}
      <div style={{ flex: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")', backgroundBlendMode: 'overlay', backgroundColor: 'var(--bg-color)' }}>
        {messages.map(msg => {
          const isMe = msg.senderId === 'me';
          const sender = isMe ? null : users.find(u => u.id === msg.senderId);
          return (
            <div key={msg.id} style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: isMe ? 'flex-end' : 'flex-start',
              maxWidth: '75%',
              backgroundColor: isMe ? 'var(--accent)' : 'var(--panel-bg)',
              color: isMe ? '#fff' : 'var(--text-primary)',
              padding: '12px 16px',
              borderRadius: '12px',
              borderBottomRightRadius: isMe ? '4px' : '12px',
              borderBottomLeftRadius: !isMe ? '4px' : '12px',
              boxShadow: 'var(--shadow)'
            }}>
              {!isMe && sender && <span style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px', color: 'var(--accent)' }}>{sender.name}</span>}
              <span style={{ fontSize: '15px', lineHeight: '1.4' }}>{msg.text}</span>
              <span style={{ fontSize: '10px', alignSelf: 'flex-end', marginTop: '4px', opacity: 0.7 }}>
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          );
        })}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSend} style={{ padding: '16px', backgroundColor: 'var(--panel-bg)', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '12px' }}>
        <input 
          type="text" 
          className="input-field" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..." 
          style={{ flex: 1, borderRadius: '24px', padding: '12px 20px' }}
        />
        <button type="submit" style={{ backgroundColor: 'var(--accent)', color: '#fff', border: 'none', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Send size={20} style={{ marginLeft: '2px' }}/>
        </button>
      </form>
    </div>
  );
};

export default Chat;
