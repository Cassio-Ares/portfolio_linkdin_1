'use client'

import { Cont, ProjCard } from "./style"

interface Props_Proj {
  img_url: string
}

export default function Card_Proj({ img_url }: Props_Proj) {
  return (
    <Cont>
      <ProjCard style={{ backgroundImage: `url(${img_url})` }}>

      </ProjCard>
    </Cont>

  )
}

