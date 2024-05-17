'use client'

import * as React from 'react';
import { useState } from 'react';
import * as S from './style'
import ButtonStyle from './buttonNavStyle/ButtonStyle';

type Anchor = 'top';

export default function NavStyle() {
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
    <div>
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
    </div>
  );
}
