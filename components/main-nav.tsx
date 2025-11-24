"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="ml-8 flex items-center  ">
      <Link href="/" className=" hidden mr-6 md:flex items-center space-x-2">
        <Image src="/favicon.png" height={20} width={30} alt="logo" />
        <span className="font-bold sm:inline-block"> spidy ui</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/docs/installation"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          installation
        </Link>
      </nav>
    </div>
  );
}
