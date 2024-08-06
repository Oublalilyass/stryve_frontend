// src/components/UploadForm.js
import { useContext, useState } from 'react';
import { TextContext } from '../context/TextContext';
import { SessionContext } from '../context/SessionContext';


const UploadForm = () => {
  const [content, setContent] = useState('');
  const { setTexts } = useContext(TextContext);
  const { sessionType } = useContext(SessionContext); // Use sessionType from context


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3308/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, sessionType }), // Use sessionType from context
      });

      if (response.ok) {
        const data = await response.json();
        setTexts((prevTexts) => (Array.isArray(prevTexts) ? [data.data, ...prevTexts] : [data.data]));
        setContent(''); // Clear the input field
      } else {
        console.error('Failed to upload text:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading text:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your text here"
        style={styles.textarea}
      />
      <button type="submit" style={styles.button}>Upload</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  textarea: {
    width: '100%', 
    height: '200px', 
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default UploadForm;
