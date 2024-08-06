// src/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div style={styles.pagination}>
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        style={styles.button}
      >
        Previous
      </button>
      <span style={styles.pageInfo}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={styles.button}
      >
        Next
      </button>
    </div>
  );
};

const styles = {
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '8px 16px',
    margin: '0 5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
  },
  pageInfo: {
    margin: '0 10px',
  },
};

export default Pagination;
