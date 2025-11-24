"use client";
import { DocLayout } from "@/components/doc-layout";
import { CodeBlock } from "@/components/code-block";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function IntroductionPage() {
  const toc = [
    { id: "design-system-control", text: "design system control", level: 2 },
  ];

  return (
    <DocLayout toc={toc}>
      <div className="max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            introduction
          </h1>
          <p className="text-md text-muted-foreground">
            spidy ui is a modern component library built as a superset of shadcn/ui, featuring beautifully-designed, accessible components with a revolutionary code distribution approach. compatible with your favorite frameworks and ai models. fully open source.
          </p>
        </div>

        <div className="space-y-4">
          <h2
            className="scroll-m-20 text-xl font-semibold tracking-tight"
            id="design-system-control"
          >
            build your design system with complete control
          </h2>
          <p>
            traditional component libraries follow a familiar pattern: install from npm, import components, and use them in your application.
            <br />
            <br />
            this works perfectly until you need to customize components for your design system or require functionality that doesn't exist in the library.{" "}
            <b>
              you end up creating wrapper components, writing complex style overrides, or mixing incompatible libraries with different apis.
            </b>
            <br />
            <br />
            spidy ui solves these challenges with a revolutionary approach built on three core principles:
            <ul className="m-2 list-disc ">
              <li className="mb-2">
                <b>open code architecture: </b>complete access to component source code for unlimited customization
              </li>
              <li className="mb-2">
                <b>composable design: </b>
                every component follows consistent, predictable patterns for seamless integration
              </li>
              <li>
                <b>enhanced foundation: </b>
                built as a superset of shadcn/ui, providing additional components while maintaining full compatibility
              </li>
            </ul>
          </p>
        </div>
        <div className="w-full ">
          <Link href="/docs/installation" className="flex justify-end  ">
            <div className="flex hover:bg-zinc-700 p-2 rounded-md ">
              installation <ChevronRight />
            </div>
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}