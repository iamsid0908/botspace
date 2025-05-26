"use client";

import Link from "next/link";
import { Typography, Container } from "@mui/material";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <Container>
      <h1 className="text-9xl font-bold text-red-500">Hello Tailwind!</h1>
      <h1>Hello Tailwind!</h1>

      <Typography variant="h4" gutterBottom>
        Welcome to Next.js + MUI App Router!
      </Typography>
      <Button>Get Started</Button>
      <Button>hi</Button>
      <Input />
    </Container>
  );
}
