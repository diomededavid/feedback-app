import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedBackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This feedback item 2',
      rating: 8,
    },
    {
      id: 3,
      text: 'This feedback item 3',
      rating: 6,
    },
  ]);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Uses to filter to remove elements on click
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedBackContext.Provider value={{ feedback, addFeedback, deleteFeedback }}>
      {children}
    </FeedBackContext.Provider>
  );
};
export default FeedBackContext;
