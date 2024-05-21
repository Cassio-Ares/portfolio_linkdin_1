'use client'

import './styles.css'

import Init from "@/components/Init/Init";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import NavBar from "@/components/navBar/NavBar";
import Projects from '@/components/project/proj/Projects';

import { Skill } from "@/components/skill/Skill";


export default function Home({ projects }: any) {
  return (
    <main className="main">
      <div>
        <NavBar />
      </div>
      <div style={{ paddingTop: '200px' }}>
        <Init />
      </div>
      <About />
      <Skill />
      <Projects data={projects}/>
      <Contact />
    </main>
  );
}