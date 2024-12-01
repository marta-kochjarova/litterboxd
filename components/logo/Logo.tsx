"use client";

import Image from 'next/image';
import LogoPrimary from '../../public/logo/logo-primary.png';
import LogoWhite from '../../public/logo/logo-white.png';
import LogoDark from '../../public/logo/logo-dark-grey.png';

interface LogoProps {
     type: string; 
     width?: number | "unset";
}

export enum LogoType {
     PRIMARY = "primary",
     LIGHT = "light",
     DARK = "dark",
}

export default function Logo({ type, width = "unset" }: LogoProps) {

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
     <Image src={logoSrc} alt="Logo" width={width === "unset" ? undefined : width} />
  );
}
