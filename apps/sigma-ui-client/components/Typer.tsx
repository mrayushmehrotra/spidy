import React from "react";
import { FlipWords } from "./ui/flip-words";

export function Typer() {
  const words = ["better", "cute", "beautiful", "modern"];

  return <FlipWords words={words} />;
}
