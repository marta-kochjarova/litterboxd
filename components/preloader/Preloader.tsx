"use client";

import styles from './preloader.module.css';
import { useMantineTheme } from "@mantine/core";

export default function Preloader() {
  const theme = useMantineTheme();

  return (
    <div className={styles.preloader} style={{backgroundColor: theme.colors.custom[1]}} >
      <div className={styles.spinner} style={{borderTopColor: theme.colors.custom[9]}}></div>
    </div>
  );
}
