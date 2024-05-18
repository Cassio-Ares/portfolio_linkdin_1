import SimpleContainer from "@/components/container";
import styles from "./page.module.css";
import NavBar from "@/components/navBar/NavBar";
import Init from "@/components/Init/Init";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div>
        <NavBar />
      </div>
      <div style={{paddingTop: '200px'}}>
        <Init/>
      </div>
          <p>About</p>
          <p>Skills</p>
      <div style={{ height: '2000px' }}></div>













































      <p>Proj</p>
      <p>Sobre</p>
    </main>
  );
}
