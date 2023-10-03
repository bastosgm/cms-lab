"use client";

import ActiveLink from "@/components/ActiveLink";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";

export default function Logo() {
  const path = usePathname();

  return (
    <ActiveLink href="/" activeClassName={styles.active} currentPath={path}>
      <span className={styles.logo}>
        <b>E.E.F.G.</b>
        <br />
        Escola Estadual
      </span>
    </ActiveLink>
  );
}
