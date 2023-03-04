import styled from 'styled-components';

export const ProfileList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(380px, 1fr));
  grid-gap: 15px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  place-items: center;

  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
