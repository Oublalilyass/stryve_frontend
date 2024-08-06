// src/components/TextList.js
import { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../context/SessionContext';
import { TextContext } from '../context/TextContext';
import Pagination from './Pagination';

const TextList = () => {
  const { sessionType } = useContext(SessionContext);
  const { texts, setTexts } = useContext(TextContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalTexts, setTotalTexts] = useState(0);
  const textsPerPage = 10;

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3308/texts?sessionType=${sessionType}&page=${currentPage}&limit=${textsPerPage}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTexts(data.texts);
        setTotalTexts(data.totalTexts);
      } catch (error) {
        console.error('Failed to fetch texts:', error);
      }
    };

    fetchTexts();
  }, [sessionType, currentPage, textsPerPage, setTexts]);

  if (!Array.isArray(texts) || texts.length === 0) {
    return <div style={styles.noTexts}>No texts available</div>;
  }

  return (
    <div>
      <ul style={styles.list}>
        {texts.map((text) => (
          <li key={text.id} style={styles.listItem}>
            {text.content}
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalItems={totalTexts}
        itemsPerPage={textsPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

const styles = {
  list: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  listItem: {
    padding: '9px 15px',
    margin: '10px 0',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
  },
  listItemHover: {
    transform: 'scale(1.05)',
  },
  noTexts: {
    padding: '20px',
    textAlign: 'center',
    color: '#999',
  },
};

export default TextList;
