import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;
export const Header = styled.header`
  height: 60px;
`;

export const Controls = styled.nav`
  position: fixed;
  width: 100%;
  padding-left: 120px;
  height: inherit;
  z-index: 100;
  display: flex;
  align-items: center;

  background-color: #3f3f3f;
`;

export const StyledLink = styled(NavLink)`
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  font-weight: 700;
  &:not(:last-of-type) {
    margin-right: 20px;
  }

  &.active {
    background-color: orange;
  }

  &:hover {
    background-color: #5000ff;
    color: white;
  }
`;

export const Main = styled.main`
  background-color: #040d12;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
`;
