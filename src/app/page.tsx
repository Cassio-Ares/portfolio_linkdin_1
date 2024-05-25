'use client'

import { ThemeProvider } from "styled-components";
import theme from "@/theme";
import {mockProj} from '../mock/mock_project'
import dynamic from "next/dynamic";
import Loading from "./loading";


const DynamicComponent = dynamic(() => import('@/view/Home'), {
  loading: () => <Loading />,
  ssr: false 
});



export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <DynamicComponent projects={mockProj}/>
    </ThemeProvider>
  );
}
