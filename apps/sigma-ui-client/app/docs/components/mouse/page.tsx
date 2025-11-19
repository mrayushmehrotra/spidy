"use client";
import { CodeBlock } from "@/components/code-block";
import { DocLayout } from "@/components/doc-layout";
import Breadcrumb from "@/components/ui/breadcumber";
import CodePreview from "@/components/ui/CodePreview";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MousePage() {
  // Mouse follower implementation
  const pathname = usePathname();

  if (pathname.endsWith("/mouse")) {
    useEffect(() => {
      const cursorDot = document.createElement("div");
      cursorDot.className = "cursor-dot";

      document.body.appendChild(cursorDot);

      let mouseX = 0;
      let mouseY = 0;
      let dotX = 0;
      let dotY = 0;
      const speed = 0.15;

      const animateDot = () => {
        const distX = mouseX - dotX;
        const distY = mouseY - dotY;

        dotX = dotX + distX * speed;
        dotY = dotY + distY * speed;

        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;

        requestAnimationFrame(animateDot);
      };

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      document.addEventListener("mousemove", handleMouseMove);
      animateDot();

      // Cleanup
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.body.removeChild(cursorDot);
      };
    }, []);
  }
  const code = `
//Css file 
.cursor-dot {
width: 50px;
height: 50px;
background-color: #f2f2f2;
border-radius: 50%;
position: fixed;
top: 0;
left: 0;
pointer-events: none;
mix-blend-mode: difference;
z-index: 9999;
transform: translate(-50%, -50%);
transition: 
transform 0.1s ease-out,
width 0.3s ease,
height 0.3s ease,
background-color 0.3s ease;
}

// JS Code
// Just the Main Logic
const cursorDot = document.createElement("div");
cursorDot.className = "cursor-dot";

document.body.appendChild(cursorDot);

let mouseX = 0;
let mouseY = 0;
let dotX = 0;
let dotY = 0;
const speed = 0.15;

const animateDot = () => {
const distX = mouseX - dotX;
const distY = mouseY - dotY;

dotX = dotX + distX * speed;
dotY = dotY + distY * speed;

cursorDot.style.left = \`\${dotX}px\`;
cursorDot.style.top = \`\${dotY}px\`;

requestAnimationFrame(animateDot);
};

const handleMouseMove = (e: MouseEvent) => {
mouseX = e.clientX;
mouseY = e.clientY;
};

document.addEventListener("mousemove", handleMouseMove);
animateDot();
`.trim();
  const preview = (
    <div className="relative h-20   flex items-center justify-center  rounded-lg">
      <h1>Mouse is Working ?</h1>
    </div>
  );
  // Add this to your global CSS file
  const cssCode = `
.cursor-dot {
width: 50px;
height: 50px;
background-color: #f2f2f2;
border-radius: 50%;
position: fixed;
top: 0;
left: 0;
pointer-events: none;
mix-blend-mode: difference;
z-index: 9999;
transform: translate(-50%, -50%);
transition: 
transform 0.1s ease-out,
width 0.3s ease,
height 0.3s ease,
background-color 0.3s ease;
}


`.trim();

  return (
    <DocLayout>
      <style jsx global>{`
        ${cssCode}
      `}</style>

      <div className="max-w-3xl space-y-12  ">
        <div className="space-y-4">
          <Breadcrumb />
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Mouse
          </h1>
          <p className="text-lg text-muted-foreground">
            Display a custom mouse follower that enhances user interaction
          </p>
        </div>

        <CodePreview code={code} preview={preview} language="jsx" />

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Implementation Code In React</h2>
          <CodeBlock language="jsx">
            {`useEffect(() => {
const cursorDot = document.createElement('div');
cursorDot.className = 'cursor-dot';
document.body.appendChild(cursorDot);

let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0;
const speed = 0.15;

const animateDot = () => {
const distX = mouseX - dotX;
const distY = mouseY - dotY;

dotX += distX * speed;
dotY += distY * speed;

cursorDot.style.left = \`\${dotX}px\`;
cursorDot.style.top = \`\${dotY}px\`;

requestAnimationFrame(animateDot);
};

const handleMouseMove = (e) => {
mouseX = e.clientX;
mouseY = e.clientY;
};

document.addEventListener('mousemove', handleMouseMove);
animateDot();
// Cleaning is important so that your code does not prone to bugs
return () => {
document.removeEventListener('mousemove', handleMouseMove);
document.body.removeChild(cursorDot);
};
}, []);`}
          </CodeBlock>
        </div>
      </div>
    </DocLayout>
  );
}
