"use client"
import { Button, useMantineTheme } from '@mantine/core';

export default function Home() {
  const theme = useMantineTheme();

  return (
    <div>
      <Button variant="filled" style={{backgroundColor: theme.colors.custom[5]}} size="xl" radius="xl">Button</Button>
    </div>
  );
}
