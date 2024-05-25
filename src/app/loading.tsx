'use client'

import CircularProgressMUI from '@mui/material/CircularProgress';
import BoxMUI from '@mui/material/Box';
import styled from 'styled-components';


export default function Loading(){
    return (
        <BoxLoad sx={{ display: 'flex' }}>
          <CircularProgress />
        </BoxLoad>
      );
}

const BoxLoad = styled(BoxMUI)` 
  width: 100%;
  height: 100vh;
  background: url('./imag/backCode.jpg')no-repeat fixed;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

const CircularProgress = styled(CircularProgressMUI)`

`;