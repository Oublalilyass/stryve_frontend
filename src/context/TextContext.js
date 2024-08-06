// src/context/TextContext.js
import { createContext, useState, useEffect } from 'react';

export const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const [texts, setTexts] = useState([]);

  return (
    <TextContext.Provider value={{ texts, setTexts }}>
      {children}
    </TextContext.Provider>
  );
};
