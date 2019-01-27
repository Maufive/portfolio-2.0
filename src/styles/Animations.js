import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const grow = keyframes`
  0% {
    transform: scale(1);
    

  }

  100% {
    transform: scale(1.2);
  }
`;
