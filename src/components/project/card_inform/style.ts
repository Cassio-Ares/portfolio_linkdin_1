import styled from "styled-components";  //ok

export const CardInfo = styled.div`
 backdrop-filter: blur(10px);
 width: 50%;
 height: 40vh;
 padding: 10px;
 margin-right: 20px;
 border-radius: 10px;
 position: relative;
`;

export const Table = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const  Div_Btn = styled.div`
 display:flex;
 gap: 20px;
 position: absolute;
 bottom: 10px;
`;

export const Item = styled.li`
 margin-left: 8px;
 list-style: none; 
 word-wrap: break-word;
`;

export const Link_Btn =styled.a`
   border-radius: 4px;
   box-shadow: 2px 2px 5px;
   padding: 8px;
   background-color:blue;
   margin-bottom: 5px;  

   &:hover{
    transform: scale(1.1)
   }
`