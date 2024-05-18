'use client'

import { DivInt } from "./style";

import ImgInit from "./cardsInit/imgInit/ImgInit";
import TextInit from "./cardsInit/textInit/TextInit";




export default function Init(){
  return (
    <DivInt>
       <TextInit/>
       <ImgInit/>
    </DivInt>
  )
}
