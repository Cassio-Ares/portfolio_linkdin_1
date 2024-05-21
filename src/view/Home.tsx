'use client'

import './styles.css'

import Init from "@/components/Init/Init";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import NavBar from "@/components/navBar/NavBar";
import Card_inf from "@/components/project/card_inform/Card_inf";
import Card_Proj from "@/components/project/card_project/Card_Proj";
import { Skill } from "@/components/skill/Skill";

export default function Home() {
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
      <Card_Proj  img_url="https://static.wikia.nocookie.net/enciclopedia-overlord/images/a/a2/AOG_bandeira.png/revision/latest?cb=20200722211410&path-prefix=pt-br" alt_text="Bandeira"/>
      {/* <Card_inf/> */}
      <Contact/>
    </main>
  );
}