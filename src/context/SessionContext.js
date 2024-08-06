import { createContext, useState, useEffect } from 'react';

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessionType, setSessionType] = useState('Writer');

  useEffect(() => {
    // Retrieve session type from localStorage if available
    const savedSessionType = localStorage.getItem('sessionType');
    if (savedSessionType) {
      setSessionType(savedSessionType);
    }
  }, []);

  useEffect(() => {
    // Update localStorage whenever sessionType changes
    localStorage.setItem('sessionType', sessionType);
  }, [sessionType]);

  return (
    <SessionContext.Provider value={{ sessionType, setSessionType }}>
      {children}
    </SessionContext.Provider>
  );
};
