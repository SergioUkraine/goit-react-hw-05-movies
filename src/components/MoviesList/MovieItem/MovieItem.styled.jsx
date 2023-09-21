import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

export const Item = styled.li`
  position: relative;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 10px;
  background-color: grey;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
    border: white solid 2px;
  }
`;

export const ItemLink = styled(Link)`
  &:hover > div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const Thumb = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 10px 20px;
  margin: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 10px 10px 0 0;
`;

export const Place = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  font-size: 24px;
  font-weight: 700;
`;

export const RateBlock = styled.span`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 700;
`;

export const RateIcon = styled(AiFillStar)`
  margin-right: 4px;
`;
