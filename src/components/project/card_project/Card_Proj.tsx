'use client'

import { ImgCard, ProjCard } from "./style"

interface Props_Proj{
    img_url: string,
    alt_text: string
}

export default function Card_Proj({img_url, alt_text}:Props_Proj) {
  return (
    <ProjCard>
        <ImgCard src={img_url} alt={alt_text}/>
    </ProjCard>
  )
}

