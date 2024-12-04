"use client";

import styles from './logo.module.css';
import Image from "next/image";
import LogoPrimary from "../../public/logo/logo-primary.png";
import LogoWhite from "../../public/logo/logo-white.png";
import LogoDark from "../../public/logo/logo-dark-grey.png";

interface LogoProps {
  type: string;
}

export enum LogoType {
  PRIMARY = "primary",
  LIGHT = "light",
  DARK = "dark",
}

export default function Logo({ type }: LogoProps) {
  let logoSrc;
  switch (type) {
    case LogoType.PRIMARY:
      logoSrc = LogoPrimary;
      break;
    case LogoType.LIGHT:
      logoSrc = LogoWhite;
      break;
    case LogoType.DARK:
      logoSrc = LogoDark;
      break;
    default:
      logoSrc = LogoPrimary;
      break;
  }

  return (
    <a href='/' className={styles.logo}>
      <img
        src={logoSrc.src}
        alt="Logo"
      />
    </a>
  );
}
