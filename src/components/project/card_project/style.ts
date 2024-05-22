import styled from "styled-components"; //ok

export const Cont = styled.div`
  width: 40%;
  height: 50vh;
  transition: all 0.8s ease;

  &:hover{
    transform: scale(2.5);
    z-index: 2;
    position: absolute;
  }
`;

export const ProjCard = styled.div`
  width: 100%;
  height: 50vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
