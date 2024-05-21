import styled from "styled-components";  //ok

import BoxMUI from '@mui/material/Box';
import DrawerMUI from '@mui/material/Drawer';
import ButtonMUI from '@mui/material/Button';
import ListMUI from '@mui/material/List';
import DividerMUI from '@mui/material/Divider';
import ListItemMUI from '@mui/material/ListItem';
import ListItemButtonMUI from '@mui/material/ListItemButton';



import ColorLensIconMUI from '@mui/icons-material/ColorLens';

export const Box = styled(BoxMUI)``

export const Drawer= styled(DrawerMUI) ``

export const Button = styled(ButtonMUI)`
 float: right;
 margin-right: 50px;
 //To DO fixed
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