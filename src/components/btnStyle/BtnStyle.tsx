'use client'

import {  BtnStyle } from "./styled"


interface PropsBtn {
    title: string;
    onClick: () => void;
}

export default function ButtonNavStyle({  title, onClick}: PropsBtn) {
  return (
   <BtnStyle onClick={onClick}>
      {title}
   </BtnStyle>
  );
}
