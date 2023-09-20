import styled from '@emotion/styled';

export const ListContainer = styled.ul`
  margin: 0;
  padding: 20px;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 16px;
`;
