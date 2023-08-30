"use client";

import Link from "next/link";
import { ActiveLinkProps } from "./interfaces";

export default function ActiveLink({
  children,
  activeClassName,
  currentPath,
  ...rest
}: ActiveLinkProps) {

  const className = currentPath === rest.href ? activeClassName : "";

  return (
    <Link className={className} {...rest}>
      {children}
    </Link>
  );
}
