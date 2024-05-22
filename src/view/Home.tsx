'use client'

import Init from "@/components/Init/Init";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import NavBar from "@/components/navBar/NavBar";
import Projects from '@/components/project/proj/Projects';
import { Skill } from "@/components/skill/Skill";
import * as S from "./styled";
import { useState } from "react";
import * as React from 'react';
import ButtonStyle from "@/components/buttonNavStyle/ButtonStyle";

type Anchor = 'top';

export default function Home({ projects }: any) {
  const [state, setState] = useState({
    top: true,
  });

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
         <ButtonStyle/>
         <ButtonStyle/>
         <ButtonStyle/>
         <ButtonStyle/> 
      </S.List>
    </S.Box>
  );

  return (
    <S.HomeMain>
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