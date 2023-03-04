// import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ onClick }) => {
  return <Btn onClick={onClick}>Follow</Btn>;
};

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
