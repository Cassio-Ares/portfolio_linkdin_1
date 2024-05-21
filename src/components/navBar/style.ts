import styled from "styled-components";  //ok

import BoxMUI from "@mui/material/Box";
import BottomNavigationMUI from "@mui/material/BottomNavigation";
import BottomNavigationActionMUI from "@mui/material/BottomNavigationAction";

export const Box = styled(BoxMUI)`
  position: fixed;
  width: 100%;
  z-index: 2;
`;

export const BottomNavigation = styled(BottomNavigationMUI)`
  background-color: transparent;
  
`;

export const BottomNavigationAction = styled(BottomNavigationActionMUI)`
  color: ${({theme})=> theme.COLORS.LIGHT}; 
  font-weight: bold;
`;

