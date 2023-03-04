import PropTypes from 'prop-types';

import { Container } from 'components/Box/Box.styled';

export const Box = ({ children }) => {
  return <Container>{children}</Container>;
};

Box.propTypes = {
  children: PropTypes.node,
};
