import styled from "@emotion/styled";

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); 
  grid-template-rows: repeat(2, auto); 
  margin-top: 25px;
  gap: 70px;
`;

export const Card = styled.div`
display:flex;
flex-direction: column;
 align-items: center;
`;

export const Div = styled.div`
 display: flex;
 align-items: center;
 justify-content:center;
`;
