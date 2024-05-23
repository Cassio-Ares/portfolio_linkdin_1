'use client'

import { DivInt } from "./style";

import ImgInit from "./cardsInit/imgInit/ImgInit";
import TextInit from "./cardsInit/textInit/TextInit";


export default function Init(){
  return (
    <DivInt id="init">
       <TextInit/>
       <ImgInit/>
    </DivInt>
  )
}
