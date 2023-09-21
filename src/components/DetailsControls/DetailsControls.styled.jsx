import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Contaner = styled.div`
  position: fixed;
  top: 15px;
  right: 30px;
  z-index: 200;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  z-index: 500;
  align-items: center;
  padding: 0 15px;
  height: 30px;
  border-radius: 5px;

  text-decoration: none;
  background-color: wheat;
  color: black;
  &:not(:last-of-type) {
    margin-right: 20px;
  }
  &:hover {
    background-color: aliceblue;
  }
`;
