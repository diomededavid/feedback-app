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
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Delete feedback
  // Uses to filter function to remove elements on click
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Update Feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  // Set item to be  updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedBackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};
export default FeedBackContext;
