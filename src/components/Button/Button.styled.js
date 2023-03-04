import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14px 28px;

  width: 196px;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  color: #373737;

  background: #ebd8ff;

  box-shadow: 0px 3.4px 3.4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: #5cd3a8;
  }
`;
