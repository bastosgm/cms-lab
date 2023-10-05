import { ButtonProps } from "./interfaces";
import styles from "./styles.module.scss";

export default function Button({ href, children }: ButtonProps) {
  return href ? (
    <a className={styles.button} href={href}>
      {children}
    </a>
  ) : (
    <button className={styles.readyButton}>{children}</button>
  );
}
