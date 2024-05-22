import styled from "styled-components";

import BoxMUI from '@mui/material/Box';
import DrawerMUI from '@mui/material/Drawer';
import ButtonMUI from '@mui/material/Button';
import ListMUI from '@mui/material/List';
import DividerMUI from '@mui/material/Divider';
import ListItemMUI from '@mui/material/ListItem';
import ListItemButtonMUI from '@mui/material/ListItemButton';

import ColorLensIconMUI from '@mui/icons-material/ColorLens';

export const HomeMain = styled.main`
  background: url("./imag/backCode.jpg")no-repeat center center fixed;
  background-size: cover;
`;

export const NavStyle = styled.div``;

export const Box = styled(BoxMUI)`
z-index: 3;
`

export const Drawer= styled(DrawerMUI) ``

export const Button = styled(ButtonMUI)`
 float: right;
 margin-right: 30px;
 z-index: 5;
`

export const List = styled(ListMUI)`
 margin: 10px;
`

export const Divider = styled(DividerMUI)``

export const ListItem = styled(ListItemMUI)``

export const ListItemButton = styled(ListItemButtonMUI)``

export const ColorLensIcon = styled(ColorLensIconMUI)`
 color: aliceblue;
 font-size: 50px;
`