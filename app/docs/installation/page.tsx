"use client";
import { DocLayout } from "@/components/doc-layout";
import { CodeBlock } from "@/components/code-block";

export default function InstallationPage() {
  const toc = [
    { id: "system-requirements", text: "system requirements", level: 2 },
    { id: "automatic-installation", text: "automatic installation", level: 2 },
    { id: "manual-installation", text: "manual installation", level: 2 },
    {
      id: "running-the-development-server",
      text: "running the development server",
      level: 2,
    },
  ];

  return (
    <DocLayout toc={toc}>
      <div className="max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            installation
          </h1>
          <p className="text-xl text-muted-foreground">
            create a new next.js application or whatever app you like.
          </p>
        </div>

        <div className="space-y-4">
          <h2
            className="scroll-m-20 text-2xl font-semibold tracking-tight"
            id="system-requirements"
          >
            system requirements
          </h2>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>node.js 18.17 or later</li>
            <li>knowledge of web</li>
            <li>macos, windows (including wsl), or linux</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2
            className="scroll-m-20 text-2xl font-semibold tracking-tight"
            id="automatic-installation"
          >
            automatic installation
          </h2>
          <p className="leading-7">
            we recommend creating a new next.js app using{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              create-next-app
            </code>
            , which sets up everything automatically for you.
          </p>
          <CodeBlock language="bash">
            npx create-next-app@latest my-app cd my-app
          </CodeBlock>
          <p className="leading-7">
            during installation, you'll see prompts to select:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>typescript or javascript</li>
            <li>eslint configuration</li>
            <li>tailwind css configuration</li>
            <li>
              the{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                src/
              </code>{" "}
              directory
            </li>
            <li>app router or pages router</li>
            <li>customize the default import alias</li>
          </ul>
        </div>

        {/* TODO: Add Shadcn Guide Installation Here in manual install */}
        <div className="space-y-4">
          <h2
            className="scroll-m-20 text-2xl font-semibold tracking-tight"
            id="manual-installation"
          >
            manual installation
          </h2>
          <p className="leading-7">
            to manually create a new next.js app, install the required packages:
          </p>
          <CodeBlock language="bash">
            npm install next@latest react@latest react-dom@latest
          </CodeBlock>
          <p className="leading-7">
            then, open your{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              package.json
            </code>{" "}
            file and add the following scripts:
          </p>
          <CodeBlock language="json">
            {`{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}`}
          </CodeBlock>
          <p className="leading-7">
            then install{" "}
            <code
              onClick={() =>
                (window.location.href =
                  "https://ui.shadcn.com/docs/installation")
              }
              className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm cursor-pointer "
            >
              shadcn
            </code>{" "}
            for only shadcn based components
          </p>
          <CodeBlock language="json">
            {` npm i shadcn@latest
`}
          </CodeBlock>
          <p className="leading-7">
            configure your shadcn, and yeah you are done :)
          </p>
        </div>

        <div className="space-y-4">
          <h2
            className="scroll-m-20 text-2xl font-semibold tracking-tight"
            id="running-the-development-server"
          >
            running the development server
          </h2>
          <p className="leading-7">
            after installation, run the development server:
          </p>
          <CodeBlock language="bash">npm run dev</CodeBlock>
          <p className="leading-7">
            now you can visit{" "}
            <a href="http://localhost:3000" className="text-primary underline">
              http://localhost:3000
            </a>{" "}
            to view your application. by default, the development server will
            run on port 3000. if that port is used, the next available port will
            be used automatically.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}

