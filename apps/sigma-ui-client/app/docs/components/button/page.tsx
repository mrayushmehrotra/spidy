"use client";
import { CodeBlock } from "@/components/code-block";
import { DocLayout } from "@/components/doc-layout";
import Breadcrumb from "@/components/ui/breadcumber";
import CodePreview from "@/components/ui/CodePreview";
import Link from "next/link";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function ButtonPage() {
  const [isBouncing, setIsBouncing] = useState(false);

  const code = `
<button 
  type="button"
className="bg-white px-3 py-2 rounded-sm text-black hover:bg-white hover:text-black
focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
  aria-label="Example button"
>
  Button
</button>
  `.trim();
  const preview = (
    <button
      type="button"
      className="bg-white px-3 py-2 rounded-sm text-black hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label="Example button"
    >
      Button
    </button>
  );

  const handleClick = () => {
    confetti();

    // Trigger bounce animation
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500); // Match CSS animation duration
  };

  const confettiButtonPreview = (
    <button
      onClick={handleClick}
      className={`confettiButtonPreview bg-zinc-400 backdrop-blur-3xl text-zinc-800 rounded-full px-6 py-4 ${
        isBouncing ? "click-bounce" : ""
      }`}
    >
      Fun Button :)
    </button>
  );

  const CoefftiButton = `
import confetti from "canvas-confetti";

const App(){
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    confetti();

    // Trigger bounce animation
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500); // Match CSS animation duration
  };
return(
      <button
        onClick={handleClick}
      className={cn(
        "bg-zinc-400 backdrop-blur-3xl text-zinc-800 rounded-full px-6 py-4",
        isBouncing ? "click-bounce" : ""
        )}    
        Fun Button :)
      </button>
        )
        }


// in your CSS 

@keyframes click-bounce {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(0.9);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.click-bounce {
  animation: click-bounce 0.5s ease;
}


`;

  return (
    <DocLayout>
      <div className="max-w-3xl space-y-12">
        <div className="space-y-4">
          <Breadcrumb />
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            button
          </h1>
          <p className="text-lg text-muted-foreground">
            displays a button or a component that looks like a button.
          </p>
        </div>
        <CodePreview code={code} preview={preview} language="jsx" />
      </div>
      <div className="lg:mt-8 md:mt-4 sm:mt-2">
        <h1 className="  text-2xl font-bold tracking-tight">
          Want Something Like Shadcn Type?
        </h1>
        <CodeBlock>
          npx shadcn@latest add https://sigma-ui-mu.vercel.app/r/button
        </CodeBlock>
        <span className="text-gray-500">
          this is just a{" "}
          <Link
            href="https://ui.shadcn.com/docs/components/button"
            className="ml-1 mr-1 text-white"
          >
            shadcn
          </Link>
          button :/ with nothing extra&apos;s
        </span>
      </div>
      {/* {Some Creative Button Now fun} */}
      <div>
        <div className="mt-8 ">
          <h1 className="text-2xl  font-extrabold">Fun Button</h1>
        </div>
        <br />
        <CodePreview
          code={CoefftiButton}
          preview={confettiButtonPreview}
          language="jsx"
        />
      </div>
    </DocLayout>
  );
}
