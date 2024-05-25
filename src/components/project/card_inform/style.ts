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
  position: relative;
  margin: 0;
  padding: 0.8em 1em;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: #1F37FF;
  border-radius: 10px;
  color: #fff;
  font-weight: 300;
  font-size: 18px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);


 &:hover {
  animation: sh0 0.5s ease-in-out both;
}

@keyframes sh0 {
  0% {
    transform: rotate(0deg)  scale(1.1) translate3d(0, 0, 0);
  }

  25% {
    transform: rotate(7deg)  scale(1.2) translate3d(0, 0, 0);
  }

  50% {
    transform: rotate(-7deg)  scale(1.3) translate3d(0, 0, 0);
  }

  75% {
    transform: rotate(1deg)  scale(1.2) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(0deg)  scale(1.1) translate3d(0, 0, 0);
  }
}
`;