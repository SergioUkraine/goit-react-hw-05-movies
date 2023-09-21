import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  display: flex;

  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;

export const PosterImg = styled.img`
  width: 240px;
  border-radius: 8px;
  border: white solid 2px;
`;

export const Description = styled.div`
  padding: 0 30px;
  min-width: 300px;
  max-width: calc(100vw / 2 - 120px);
`;

export const Inner = styled.div`
  padding: 0 30px;
  min-width: 300px;
  max-width: calc(100vw / 2 - 120px);
`;
