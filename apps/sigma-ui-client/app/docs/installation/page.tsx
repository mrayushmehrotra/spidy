"use client";
import { DocLayout } from "@/components/doc-layout";
import { CodeBlock } from "@/components/code-block";

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
          <p className="text-xl text-muted-foreground">
            Create a new Next.js application or Whatever App you like.
          </p>
        </div>

        <div className="space-y-4">
          <h2
            className="scroll-m-20 text-2xl font-semibold tracking-tight"
            id="system-requirements"
          >
            System Requirements
          </h2>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Node.js 18.17 or later</li>
            <li>Knowledge of Web</li>
            <li>macOS, Windows (including WSL), or Linux</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2
            className="scroll-m-20 text-2xl font-semibold tracking-tight"
            id="automatic-installation"
          >
            Automatic Installation
          </h2>
          <p className="leading-7">
            We recommend creating a new Next.js app using{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              create-next-app
            </code>
            , which sets up everything automatically for you.
          </p>
          <CodeBlock language="bash">
            npx create-next-app@latest my-app cd my-app
          </CodeBlock>
          <p className="leading-7">
            During installation, you'll see prompts to select:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>TypeScript or JavaScript</li>
            <li>ESLint configuration</li>
            <li>Tailwind CSS configuration</li>
            <li>
              The{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                src/
              </code>{" "}
              directory
            </li>
            <li>App Router or Pages Router</li>
            <li>Customize the default import alias</li>
          </ul>
        </div>

        {/* TODO: Add Shadcn Guide Installation Here in manual install */}
        <div className="space-y-4">
          <h2
            className="scroll-m-20 text-2xl font-semibold tracking-tight"
            id="manual-installation"
          >
            Manual Installation
          </h2>
          <p className="leading-7">
            To manually create a new Next.js app, install the required packages:
          </p>
          <CodeBlock language="bash">
            npm install next@latest react@latest react-dom@latest
          </CodeBlock>
          <p className="leading-7">
            Then, open your{" "}
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
            configure your shadcn, and Yeah you are done :)
          </p>
        </div>

        <div className="space-y-4">
          <h2
            className="scroll-m-20 text-2xl font-semibold tracking-tight"
            id="running-the-development-server"
          >
            Running the Development Server
          </h2>
          <p className="leading-7">
            After installation, run the development server:
          </p>
          <CodeBlock language="bash">npm run dev</CodeBlock>
          <p className="leading-7">
            Now you can visit{" "}
            <a href="http://localhost:3000" className="text-primary underline">
              http://localhost:3000
            </a>{" "}
            to view your application. By default, the development server will
            run on port 3000. If that port is used, the next available port will
            be used automatically.
          </p>
        </div>
      </div>
    </DocLayout>
  );
}
