import Card from '../Shared/Card';

function FeedbackItem({ item }) {
  return (
    <Card reverse={true}>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
