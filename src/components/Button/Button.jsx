import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ onClick, btnClick }) => {
  return (
    <Btn type="button" onClick={onClick} status={btnClick}>
      {!btnClick ? 'Follow' : 'Following'}
    </Btn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnClick: PropTypes.bool,
};
