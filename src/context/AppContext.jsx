/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { dummyUsers, dummyMessages, dummyNodes, dummyLogs, dummyFiles } from '../utils/dummyData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('userProfile');
    return saved ? JSON.parse(saved) : { name: 'My User', status: 'online', isBroadcasting: true };
  });
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved) : dummyMessages;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const sendMessage = (text) => {
    const newMsg = {
      id: `m${Date.now()}`,
      senderId: 'me',
      text,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, newMsg]);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <AppContext.Provider value={{
      theme, toggleTheme, setTheme,
      userProfile, setUserProfile,
      messages, sendMessage,
      users: dummyUsers,
      nodes: dummyNodes,
      logs: dummyLogs,
      files: dummyFiles
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
