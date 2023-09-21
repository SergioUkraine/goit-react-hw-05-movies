import styled from '@emotion/styled';

export const ListContainer = styled.ul`
  margin: 0;
  padding: 30px 0;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 24px;
`;
