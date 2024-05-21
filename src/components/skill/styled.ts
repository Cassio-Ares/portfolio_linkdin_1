import styled from "styled-components";  //ok

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); 
  grid-template-rows: repeat(2, auto); 
  margin-top: 80px;
  gap: 70px;
`;

export const Card = styled.div`
display:flex;
flex-direction: column;
 align-items: center;
`;

