'use client'

import React from 'react'

import { CardInfo, Item, Link_Btn, Table } from './style'


interface CardInfoProps{
    name: string,
    technology: Array<string>,
    description: string,
    link_do_git: string,
    link_do_site: string,
}

export default function Card_inf({name, technology, description, link_do_git, link_do_site}: CardInfoProps, ){
   return (
    <CardInfo>
      <h2>{name}</h2>
      <Table>
       {technology && technology.map((tech, index) => (
          <Item key={index}>{tech}</Item>
        ))} 
      </Table>
      <p>{description}</p>
      <Link_Btn href={link_do_git} target='_black'>Acesse o github do projeto</Link_Btn>
      {link_do_site && <Link_Btn href={link_do_site} target='_black'>Acesse ao site</Link_Btn>}
    </CardInfo>
  )
}

