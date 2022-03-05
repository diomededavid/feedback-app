import spinner from '../assets/three-dots.svg';

function Spinner() {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '120px', margin: 'auto', display: 'block' }}
    />
  );
}

export default Spinner;
