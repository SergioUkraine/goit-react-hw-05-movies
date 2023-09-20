import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AiFillCaretLeft } from 'react-icons/ai';

export const Containter = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  background-image: ${props =>
    props.backImg
      ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${props.backImg})`
      : 'none'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const BackLink = styled(Link)`
  position: fixed;
  bottom: 30px;
  left: 40px;
  display: inline-flex;
  justify-content: center;
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

export const BackLinkIcon = styled(AiFillCaretLeft)`
  width: 24px;
  height: 24px;
  display: block;
`;

export const BackLinkText = styled.span``;

export const CastLink = styled(Link)``;

export const ReviewsLink = styled(Link)``;
