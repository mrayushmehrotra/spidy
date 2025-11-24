"use client";
import { CodeBlock } from "@/components/code-block";
import { DocLayout } from "@/components/doc-layout";
import Breadcrumb from "@/components/ui/breadcumber";
import CodePreview from "@/components/ui/CodePreview";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function MagneticDiv({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    console.log(children);
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    magnetic.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    });
    magnetic.current.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
const MagneticDivCode = `
function MagneticDiv({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    console.log(children);
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    magnetic.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    });
    magnetic.current.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return React.cloneElement(children, { ref: magnetic });

`;

export default function MagneticElement() {
  const navbarCode = `
<MagneticDiv>
<button 
  type="button"
className="bg-white px-3 py-2 rounded-sm text-black hover:bg-white hover:text-black
focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
  aria-label="Example button"
>
  Button
</button>
</MagneticDiv>

`;
  const preview = (
    <>
      <MagneticDiv>
        <button
          type="button"
          className="bg-white px-3 py-2 rounded-sm text-black hover:bg-white hover:text-black
focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Example button"
        >
          hover Me :)
        </button>
      </MagneticDiv>
    </>
  );

  return (
    <DocLayout>
      <div className="max-w-3xl space-y-12">
        <div className="space-y-4">
          <Breadcrumb />
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Magnetic Element
          </h1>
          <p className="text-lg text-muted-foreground">
            A Magnetic Button Element for better user interactivity
          </p>
        </div>
        <CodePreview code={navbarCode} preview={preview} language="jsx" />
      </div>
      <div className="lg:mt-8 md:mt-4 sm:mt-2">
        <h1 className="text-2xl font-bold tracking-tight">
          Integration with Shadcn UI
        </h1>
        <CodeBlock language="bash">
          npx shadcn@latest add https://spidy-blond.vercel.app/r/magnetic_div
        </CodeBlock>
        <span className="text-gray-500">
          Customizable navbar component built with{" "}
          <Link
            href="https://ui.shadcn.com/docs"
            className="ml-1 mr-1 text-white"
          >
            shadcn/ui
          </Link>
          foundations
        </span>
        <CodeBlock>{MagneticDivCode}</CodeBlock>
      </div>
    </DocLayout>
  );
}
