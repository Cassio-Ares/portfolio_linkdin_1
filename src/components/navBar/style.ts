import styled from "@emotion/styled";

import BoxMUI from "@mui/material/Box";
import BottomNavigationMUI from "@mui/material/BottomNavigation";
import BottomNavigationActionMUI from "@mui/material/BottomNavigationAction";
import RestoreIconMUI from "@mui/icons-material/Restore";
import FavoriteIconMUI from "@mui/icons-material/Favorite";
import LocationOnIconMUI from "@mui/icons-material/LocationOn";

export const Box = styled(BoxMUI)`
  position: fixed;
  width: 100%;
`;

export const BottomNavigation = styled(BottomNavigationMUI)`
  background-color: transparent;
`;

export const BottomNavigationAction = styled(BottomNavigationActionMUI)`
       color: #FFFFFF;
`;

export const RestoreIcon = styled(RestoreIconMUI)``;

export const FavoriteIcon = styled(FavoriteIconMUI);

export const LocationOnIcon = styled(LocationOnIconMUI)``;
