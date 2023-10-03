import styles from "./styles.module.scss";
import Menu from "./components/Menu";
import Logo from "./components/Logo";
import Button from "../Button";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo />
        <Menu />
        <Button href="/">É um admin?</Button>
      </div>
    </header>
  );
}
