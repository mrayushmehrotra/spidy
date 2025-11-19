"use client";
import { DocLayout } from "@/components/doc-layout";
import { CodeBlock } from "@/components/code-block";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function InstallationPage() {
  const toc = [
    { id: "system-requirements", text: "System Requirements", level: 2 },
    { id: "automatic-installation", text: "Automatic Installation", level: 2 },
    { id: "manual-installation", text: "Manual Installation", level: 2 },
    {
      id: "running-the-development-server",
      text: "Running the Development Server",
      level: 2,
    },
  ];

  return (
    <DocLayout toc={toc}>
      <div className="max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Installation
          </h1>
          <p className="text-md text-muted-foreground">
            sigma/ui is supposed to be a superset of shadcn/ui which is a set of
            beautifully-designed, accessible components and a code distribution
            platform. Works with your favorite frameworks and AI models. Open
            Source. Open Code.
          </p>
        </div>

        <div className="space-y-4">
          <h2
            className="scroll-m-20 text-xl font-semibold tracking-tight"
            id="system-requirements"
          >
            This is not a component library. It is how you build your component
            library.
          </h2>
          <p>
            You know how most traditional component libraries work: you install
            a package from NPM, import the components, and use them in your app.
            <br />
            <br />
            This approach works well until you need to customize a component to
            fit your design system or require one that isn’t included in the
            library.{" "}
            <b>
              Often, you end up wrapping library components, writing workarounds
              to override styles, or mixing components from different libraries
              with incompatible APIs.
            </b>
            <br />
            <br />
            This is what shadcn/ui aims to solve. It is built around the
            following principles:
            <ul className="m-2 list-disc ">
              <li className="mb-2">
                <b>Open Code: </b>The Top layer of your component code is open
                for modifications
              </li>
              <li className="mb-2">
                <b>Composition: </b>
                every component uses a common, composable interface, making it
                easily predicatable
              </li>
              <li>
                <b>Superset: </b>
                this is a superset of shadcn/ui which is built on top of shadcn,
                which mean&apos;s some component might use shadcn behind the
                scene
              </li>
            </ul>
          </p>
        </div>
        <div className="w-full ">
          <Link href="/docs/installation" className="flex justify-end  ">
            <div className="flex hover:bg-zinc-700 p-2 rounded-md ">
              Installtion <ChevronRight />
            </div>
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
