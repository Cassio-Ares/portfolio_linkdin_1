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
        <S.BottomNavigationAction
          label="Init"
          sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '1.2rem' } }} />
        <S.BottomNavigationAction
          label="Sobre"
          sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '1.2rem' } }} />
        <S.BottomNavigationAction
          label="Skills"
          sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '1.2rem' } }} />
        <S.BottomNavigationAction
          label="Projetos"
          sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '1.2rem' } }} />
        <S.BottomNavigationAction
          label="Contato"
          sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '1.2rem' } }} />
        <NavStyle />
      </S.BottomNavigation>
    </S.Box>
  );
}
