import styled from 'styled-components';

export const ProfileList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(380px, 1fr));
  grid-gap: 15px;
  margin: 0 auto;
  padding: 0;
  place-items: center;

  list-style: none;
`;
