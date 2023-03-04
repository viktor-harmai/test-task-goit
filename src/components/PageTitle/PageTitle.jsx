import PropTypes from 'prop-types';

import { Header, Title } from './PageTitle.styled';

export const PageTitle = ({ text }) => {
  return (
    <Header>
      <Title>{text}</Title>
    </Header>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
