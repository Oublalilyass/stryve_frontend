// pages/index.js
import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../context/SessionContext';
import { TextContext } from '../context/TextContext';
import SessionSwitcher from '../components/SessionSwitcher';
import UploadForm from '../components/UploadForm';
import TextList from '../components/TextList';
import { setupWebSocket } from '../utils/webSocket';

const HomePage = () => {
  const { sessionType } = useContext(SessionContext);
  const { setTexts } = useContext(TextContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const response = await fetch(`http://localhost:3308/texts?sessionType=${sessionType}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTexts(data.texts); // Update texts in context
      } catch (error) {
        console.error('Failed to fetch texts:', error);
      }
    };

    fetchTexts();
  }, [sessionType, setTexts]);

  useEffect(() => {
    setIsClient(true);
    const socket = setupWebSocket(setTexts);
    return () => socket.close(); // Clean up WebSocket connection on component unmount
  }, [setTexts]);

  if (!isClient) return null; // Ensure client-side rendering

  return (
    <div className="container">
      <div className="frame">
        <header className="header">
          <h2>Text Management App</h2>
          <SessionSwitcher />
        </header>
        <main className="main-content sensitive-info ">
          <UploadForm />
          <TextList />
        </main>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 1rem;
          background-color: #f7f7f7;
        }
        .frame {
          width: 100%;
          max-width: 600px;
          border-radius: 8px;
          background-color: white;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #007bff;
          color: white;
        }
        .main-content {
          padding: 2rem;
        }
        h2 {
          font-size: 1rem;
          margin: 0;
        }
        .sensitive-info {
         user-select: none;
         pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
