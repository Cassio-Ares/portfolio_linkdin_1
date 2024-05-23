import styled, {css} from "styled-components";

import BoxMUI from '@mui/material/Box';
import DrawerMUI from '@mui/material/Drawer';
import ButtonMUI from '@mui/material/Button';
import ListMUI from '@mui/material/List';
import DividerMUI from '@mui/material/Divider';
import ListItemMUI from '@mui/material/ListItem';
import ListItemButtonMUI from '@mui/material/ListItemButton';

import ColorLensIconMUI from '@mui/icons-material/ColorLens';

export type StyleTypeCss = {
  type: 'style 1' | 'style 2' | 'style 3' | 'style 4' 

}

export const HomeMain = styled.main<StyleTypeCss>`
  background: ${({theme, type }) => {
    switch (type) {
      case 'style 1':
        return `url(${theme.BACKGROUND.CODE})no-repeat fixed;`;
      case 'style 2':
        return theme.BACKGROUND.COLORBG;
      case 'style 3':
        return theme.BACKGROUND.SPACE;;  
      case 'style 4':
        return 'red';    
      default:
        return 'white';  
    }
  }};
  background-size: cover;
`;


export const NavStyle = styled.div``;

export const Box = styled(BoxMUI)`
z-index: 3;
`

export const Drawer= styled(DrawerMUI) ``

export const Button = styled(ButtonMUI)`
 position: fixed;
 margin-left: 90%;
 z-index: 5;
 
`

export const List = styled(ListMUI)`
  display:flex;
  justify-content: space-around;
`

export const Divider = styled(DividerMUI)``

export const ListItem = styled(ListItemMUI)``

export const ListItemButton = styled(ListItemButtonMUI)``

export const ColorLensIcon = styled(ColorLensIconMUI)`
 color: aliceblue;
 font-size: 50px;
`
