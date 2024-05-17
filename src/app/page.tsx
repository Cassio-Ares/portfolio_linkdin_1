import  NavStyle  from "@/components/navStyle/NavStyle";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
    <NavStyle/>
    <p>Init</p>
    <p>About</p>
    <p>Skills</p>
    <p>Proj</p>
    <p>Sobre</p>
    </main>
  );
}
