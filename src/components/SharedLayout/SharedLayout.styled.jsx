import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.header`
  height: 60px;
`;

export const Controls = styled.nav`
  position: fixed;
  width: 100%;
  height: inherit;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 30px;
  background-color: #3f3f3f;
`;

export const StyledLink = styled(NavLink)`
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 15px;
  background-color: white;
  color: black;
  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &.active {
    background-color: orange;
  }

  &:hover {
    background-color: #5000ff;
    color: white;
    &.active {
      background-color: red;
    }
  }
`;

export const Main = styled.main`
  background-color: #040d12;
  min-height: calc(100vh - 60px);
`;
