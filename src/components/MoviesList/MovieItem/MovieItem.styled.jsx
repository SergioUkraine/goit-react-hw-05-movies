import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ItemLink = styled(Link)``;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 10px;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
    border: white solid 2px;
  }
`;
