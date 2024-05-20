'use client'

import React from 'react'

import { CardInfo } from './style'

interface CardInfoProps{
    name: string,
    technology: Array<string>,
    description: string
}

export default function Card_inf({name, technology, description}: CardInfoProps){
  return (
    <CardInfo>
      <h2>{name}</h2>
      <ul>
        {/* {technology.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))} */}
      </ul>
      <p>{description}</p>
    </CardInfo>
  )
}

