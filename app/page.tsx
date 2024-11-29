import styles from "./page.module.css";
import { Button } from '@mantine/core';

export default function Home() {
  return (
    <div className={styles.page}>
      <Button variant="filled" color="teal" size="xl" radius="xl">Button</Button>
    </div>
  );
}
