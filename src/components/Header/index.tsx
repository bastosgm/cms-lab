import styles from "./styles.module.scss";
import logo from "../../../public/images/sun.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="">
          <Image width={50} src={logo} alt="futura imagem aqui" />
        </a>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/posts">Content</Link>
          <Link href="/about">Who we are?</Link>
        </nav>

        <a
          className={styles.readyButton}
          type="button"
          href="https://google.com"
        >
          Salve
        </a>
      </div>
    </header>
  );
}
