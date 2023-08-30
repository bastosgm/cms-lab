"use client";

import styles from "./styles.module.scss";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import ActiveLink from "../ActiveLink";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href="/" activeClassName={styles.active} currentPath={path}>
          <Image width={40} src={logo} alt="logo" />
        </ActiveLink>

        <nav>
          <ActiveLink
            href="/"
            activeClassName={styles.active}
            currentPath={path}
          >
            Home
          </ActiveLink>
          <ActiveLink
            href="/posts"
            activeClassName={styles.active}
            currentPath={path}
          >
            Content
          </ActiveLink>
          <ActiveLink
            href="/about"
            activeClassName={styles.active}
            currentPath={path}
          >
            Who we are?
          </ActiveLink>
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
