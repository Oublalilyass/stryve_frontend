import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext';

const SessionSwitcher = () => {
  const { sessionType, setSessionType } = useContext(SessionContext);

  const switchToWriter = () => {
    setSessionType('Writer');
    console.log('Switched to Writer'); // Debugging
  };

  const switchToPublisher = () => {
    setSessionType('Publisher');
    console.log('Switched to Publisher'); // Debugging
  };

  return (
    <div className="session-switcher">
      <button
        onClick={switchToWriter}
        disabled={sessionType === 'Writer'}
      >
        Switch to Writer
      </button>
      <button
        onClick={switchToPublisher}
        disabled={sessionType === 'Publisher'}
      >
        Switch to Publisher
      </button>
      <style jsx>{`
        .session-switcher {
          display: flex;
          gap: 10px; /* Space between buttons */
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:disabled {
          background-color: #0056b3;
          cursor: not-allowed;
          color: #ffffff;
        }
        button:not(:disabled):hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default SessionSwitcher;
