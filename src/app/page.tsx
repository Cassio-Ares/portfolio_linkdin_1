import styles from "./page.module.css";
import NavBar from "@/components/navBar/NavBar";
import Init from "@/components/Init/Init";
import About from "@/components/about/About";
import { Skill } from "@/components/skill/Skill";
import Card_Proj from "@/components/project/card_project/Card_Proj";
import Card_inf from "@/components/project/card_inform/Card_inf";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div>
        <NavBar />
      </div>
      <div style={{ paddingTop: '200px' }}>
        <Init />
      </div>
      <About />
      <Skill />
      <Card_Proj  img_url="https://static.wikia.nocookie.net/enciclopedia-overlord/images/a/a2/AOG_bandeira.png/revision/latest?cb=20200722211410&path-prefix=pt-br" alt_text="Bandeira"/>
      <Card_inf/>
      <div style={{ height: '2000px' }}></div>













































      <p>Proj</p>
      <p>Sobre</p>
    </main>
  );
}
