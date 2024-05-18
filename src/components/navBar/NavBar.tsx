'use client'

import { useState } from 'react';
import * as S from './style';
import NavStyle from '../navStyle/NavStyle';

export default function NavBar() {
  const [value, setValue] = useState(0);

  return (
    <S.Box sx={{ width: 500 }}>
      <S.BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <S.BottomNavigationAction label="Init" />
        <S.BottomNavigationAction label="Sobre" />
        <S.BottomNavigationAction label="Skills" />
        <S.BottomNavigationAction label="Projetos" />
        <S.BottomNavigationAction label="Contato" />
         <NavStyle/>
      </S.BottomNavigation>
    </S.Box>
  );
}
