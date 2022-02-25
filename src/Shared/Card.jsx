import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  // using style with ternary operator
  // return (
  //     <div
  //       style={{
  //         backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4' : '#fff',
  //         color: reverse ? '#fff' : '#000',
  //       }}
  //     >
  //       {children}
  //     </div>
  //   );

  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}

Card.defautlProps = {
  reverse: false,
};

Card.propTyoes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
