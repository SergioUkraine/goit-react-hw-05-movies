import styled from '@emotion/styled';

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
