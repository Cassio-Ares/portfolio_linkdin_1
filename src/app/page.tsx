'use client'

import Home from "@/view/Home";
import { ThemeProvider } from "styled-components";
import theme from "@/theme";
import {mockProj} from '../mock/mock_project'


export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Home  projects={mockProj}/>
    </ThemeProvider>
  );
}
