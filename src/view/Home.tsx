'use client'

import Init from "@/components/Init/Init";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import NavBar from "@/components/navBar/NavBar";
import Projects from '@/components/project/proj/Projects';
import * as S from "./styled";
import { useState } from "react";
import * as React from 'react';
import ButtonNavStyle from "@/components/btnStyle/BtnStyle";
import Skill from "@/components/skill/Skill";

type Anchor = 'top';

type TypeStyle ='style 1' | 'style 2' | 'style 3' | 'style 4';

export default function Home({ projects }: any) {
  const [state, setState] = useState({
    top: true,
  });

  const [selectedStyle, setSelectedStyle] = useState<TypeStyle>('style 3'); // Correct typing here

  function handleStyle(type: TypeStyle) {
    setSelectedStyle(type);
  }

  console.log(selectedStyle);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <S.Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <S.List>
        <ButtonNavStyle onClick={() => handleStyle('style 1')} title='stylo 1' />
        <ButtonNavStyle  onClick={() => handleStyle('style 2')} title='stylo 2' />
        <ButtonNavStyle  onClick={() => handleStyle('style 3')} title='stylo 3' />
        <ButtonNavStyle  onClick={() => handleStyle('style 4')} title='stylo 4' />
      </S.List>
    </S.Box>
  );

  return (
    <S.HomeMain type={selectedStyle}> 
      <S.NavStyle>
        {(['top'] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <S.Button onClick={toggleDrawer(anchor, true)}><S.ColorLensIcon /></S.Button>
            <S.Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </S.Drawer>
          </React.Fragment>
        ))}
      </S.NavStyle>







      <div>
        <NavBar />
      </div>
      <div style={{ paddingTop: '120px' }}>
        <Init />
      </div>
      <About />
      <Skill />
      <Projects data={projects} />
      <Contact />
    </S.HomeMain>
  );
}