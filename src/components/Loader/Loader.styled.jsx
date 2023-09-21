import styled from '@emotion/styled';
import { BiLoader } from 'react-icons/bi';
export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`;

export const Spinner = styled(BiLoader)`
  color: white;
  width: 100px;
  height: 100px;
  animation: rot 2s linear infinite;
  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
