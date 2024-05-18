import styles from "./page.module.css";
import NavBar from "@/components/navBar/NavBar";
import Init from "@/components/Init/Init";
import About from "@/components/about/About";
import { Skill } from "@/components/skill/Skill";

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
      <div style={{ height: '2000px' }}></div>













































      <p>Proj</p>
      <p>Sobre</p>
    </main>
  );
}
