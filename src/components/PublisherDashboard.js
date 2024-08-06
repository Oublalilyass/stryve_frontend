import { useContext } from 'react';
import { TextContext } from '../context/TextContext';

const PublisherDashboard = () => {
  const { texts } = useContext(TextContext);

  return (
    <div>
      <h3>Publisher Dashboard</h3>
      {/* Publisher-specific components or data */}
      <div>
        {texts
          .filter(text => text.sessionType === 'Publisher')
          .map(text => (
            <div key={text.id}>
              <h4>{text.title}</h4>
              <p>{text.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PublisherDashboard;
