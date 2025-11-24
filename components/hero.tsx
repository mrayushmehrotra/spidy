"use client";

import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CodeBlock } from "./code-block";
import Link from "next/link";

export function Hero() {
  const [count, setCount] = useState(0);
  const phrases = [
    "Production grade React applications",
    "Full-stack web applications",
    "Server-side rendered apps",
    "Static webstes",
    "Enterprise pplications",
    "Hybrid applications",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count + 1) % phrases.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [count, phrases.length]);

  return (
    <div className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex justify-center">
            <svg
              height="32"
              viewBox="0 0 180 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
            >
              <mask
                id="mask0_408_134"
                style={{ maskType: "alpha" }}
                x="0"
                y="0"
                width="180"
                height="180"
              >
                <circle cx="90" cy="90" r="90" fill="black" />
              </mask>
              <g mask="url(#mask0_408_134)">
                <circle
                  cx="90"
                  cy="90"
                  r="87"
                fill="currentColor"
                  stroke="hsl(var(--background))"
                  strokeWidth="6"
                />
                <path
                  d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                  fill="url(#paint0_linear_408_134)"
                />
                <rect
                  x="115"
                  y="54"
                  width="12"
                  height="72"
                  fill="url(#paint1_linear_408_134)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_408_134"
                  x1="109"
                  y1="116.5"
                  x2="144.5"
                  y2="160.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="hsl(var(--background))" />
                  <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_408_134"
                  x1="121"
                  y1="54"
                  x2="120.799"
                  y2="106.875"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="hsl(var(--background))" />
                  <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            sigma for next, and many more
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            a component library build on top of shadcn
          </p>
          <Link
            onClick={() => navigator.clipboard.writeText("")}
            href="/docs/installation"
          >
            <CodeBlock
              language="bash"
              className=" pointer-events-none overflow-hidden "
            >
              npx shadcn@latest init
            </CodeBlock>
          </Link>
          <div className="mt-10 flex flex-col   ">
            <div className="flex items-center justify-center gap-x-6">
              <Link href="/docs/installation">
                <Button size="lg" className="gap-1">
                  get started
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" size="lg">
                  let&apos;s build
                </Button>{" "}
              </Link>
            </div>
            <div className="flex mt-4 items-center justify-center lg:gap-4">
              <Image
                src="/react.svg"
                className="hover:brightness-125"
                alt="img"
                height={60}
                width={60}
              />
              <Image
                src="/next.svg"
                className="hover:brightness-125"
                alt="img"
                height={60}
                width={60}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
