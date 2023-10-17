import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "@/../public/images/logo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className={styles.imageContainer}>
      <Image
        src={logo}
        alt="Logo da escola"
        width={70}
        height={70}
        quality={100}
      />
    </Link>
  );
}
