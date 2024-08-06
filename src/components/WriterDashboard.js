import UploadForm from './UploadForm';
import TextList from './TextList';
import { useContext } from 'react';
import { TextContext } from '../context/TextContext';

const WriterDashboard = () => {
  const { texts } = useContext(TextContext);

  return (
    <div>
      <h3>Writer Dashboard</h3>
      <UploadForm />
      <TextList texts={texts.filter(text => text.sessionType === 'Writer')} />
    </div>
  );
};

export default WriterDashboard;
