"use client";

import Link from "next/link";
import { Typography, Container, Button } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Link href="/post" passHref>
        <Button component="a">Click</Button>
      </Link>
    </Container>
  );
}
