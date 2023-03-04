import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Header, HeaderBox, Title } from './PageTitle.styled';

export const PageTitle = ({ text }) => {
  return (
    <Header>
      <Box>
        <HeaderBox>
          <Title>{text}</Title>
        </HeaderBox>
      </Box>
    </Header>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
