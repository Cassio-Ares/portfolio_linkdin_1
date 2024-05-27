import styled from "styled-components"; 

export const ProjCard = styled.div`
  width: 40%;
  height: 50vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.8s ease;
  box-sizing: border-box;

  &:hover{
    transform: translate(60%) scale(2.2);
    z-index: 5;
    position: center;
  }
  
`;
