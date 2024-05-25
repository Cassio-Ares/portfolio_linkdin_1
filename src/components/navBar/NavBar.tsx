'use client'

import { useEffect, useState } from 'react';
import * as S from './style';

export default function NavBar() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleClick = (e:any) => {
      const id = e.currentTarget.dataset.target;
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const buttons = document.querySelectorAll('.MuiBottomNavigationAction-root');
    buttons.forEach(item => {
      item.addEventListener('click', handleClick);
    });

    return () => {
      buttons.forEach(item => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);

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
          label="Inicio" data-target="init"
          sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '1.2rem' } }} />

        <S.BottomNavigationAction
          label="Sobre" data-target="sobre"
          sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '1.2rem' } }} />

        <S.BottomNavigationAction
          label="Skills" data-target="skills"
          sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '1.2rem' } }} />

        <S.BottomNavigationAction
          label="Projetos" data-target="projects"
          sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '1.2rem' } }} />

        <S.BottomNavigationAction
          label="Contato" data-target="contato"
          sx={{ '& .MuiBottomNavigationAction-label': { fontSize: '1.2rem' } }} />
      </S.BottomNavigation>
    </S.Box>
  );
}
