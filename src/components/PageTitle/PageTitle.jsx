import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Header, Title } from './PageTitle.styled';

export const PageTitle = ({ text }) => {
  return (
    <Header>
      <Box>
        <Title>{text}</Title>
      </Box>
    </Header>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
