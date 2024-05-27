'use client'

import * as S from './styled'

export default function Contact() {
  return (
    <S.CardContact id='contato'>
      <a href="https://www.linkedin.com/in/cassio-tadeu-da-rosa-silva-348a05308" target='_blank'><S.Link/></a>
      <a href='https://github.com/Cassio-Ares' target='_blank'><S.GitHub/></a>
      <a href='https://wa.me/+5551993103664' target='_blank'><S.Whats/></a>
    </S.CardContact>
  );
}