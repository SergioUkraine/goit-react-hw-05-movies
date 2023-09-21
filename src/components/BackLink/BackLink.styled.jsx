import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AiFillCaretLeft } from 'react-icons/ai';

export const LinkButton = styled(Link)`
  position: fixed;
  top: 15px;
  left: 20px;
  display: inline-flex;
  justify-content: center;
  z-index: 200;
  align-items: center;
  padding-left: 5px;
  padding-right: 15px;
  height: 30px;
  border-radius: 5px;

  text-decoration: none;
  background-color: wheat;
  color: black;
  &:hover {
    background-color: aliceblue;
  }
`;

export const LinkIcon = styled(AiFillCaretLeft)`
  width: 24px;
  height: 24px;
  display: block;
`;

export const LinkText = styled.span``;
