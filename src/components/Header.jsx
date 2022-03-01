import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <Link to={{ pathname: '/' }}>
        <h1>{text}</h1>
      </Link>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0, 0.4)',
  textColor: '#ff6a85',
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
