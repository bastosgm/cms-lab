"use client";

import ActiveLink from "@/components/ActiveLink";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

export default function Menu() {
  const path = usePathname();

  return (
    <nav className={styles.menu}>
      <ActiveLink href="/" activeClassName={styles.active} currentPath={path}>
        Home
      </ActiveLink>
      <ActiveLink
        href="/posts"
        activeClassName={styles.active}
        currentPath={path}
      >
        Anúncios
      </ActiveLink>
      <ActiveLink
        href="/news"
        activeClassName={styles.active}
        currentPath={path}
      >
        Notícias
      </ActiveLink>
      <ActiveLink
        href="/mission"
        activeClassName={styles.active}
        currentPath={path}
      >
        Missão
      </ActiveLink>
      <ActiveLink
        href="/contact"
        activeClassName={styles.active}
        currentPath={path}
      >
        Contato
      </ActiveLink>
    </nav>
  );
}
