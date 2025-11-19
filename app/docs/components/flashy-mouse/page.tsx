"use client";

import { DocLayout } from "@/components/doc-layout";
import Breadcrumb from "@/components/ui/breadcumber";
import CodePreview from "@/components/ui/CodePreview";
import Link from "next/link";

export default function MousePage() {
  const code = `
// in html 

  <div id="neon">
      <h1>NINJA <br />HATTORI</h1>
    </div>

// IN CSS 

body,
html,
#neon {
    margin: 0;
    width: 100%;
    height: 100%;
}

#neon {
    overflow: hidden;
    touch-action: pan-up;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    text-shadow: 0 0 5px #ffffff, 0 0 20px #000, 0 0 30px #000;
}

#neon h1 {
    --fontSize: 60px;
    --lineHeight: 80px;
    width: auto;
    height: calc(2 * var(--lineHeight));
    line-height: var(--lineHeight);
    margin: calc(50vh - var(--lineHeight)) auto 0;
    font-size: var(--fontSize);
    text-transform: uppercase;
}

#neon canvas {
    display: block;
    position: fixed;
    z-index: -1;
    top: 0;
}

// IN JS FILE

// Just the Main Logic
import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

neonCursor({
    el: document.getElementById("neon"),
    shaderPoints: 16,
    curvePoints: 80,
    curveLerp: 0.5,
    radius1: 5,
    radius2: 30,
    velocityTreshold: 10,
    sleepRadiusX: 100,
    sleepRadiusY: 100,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025
});`.trim();
  const preview = (
    <iframe
      src="https://ridhi-piddi.vercel.app/"
      className="scale-x-[250%] scale-y-[220%] "
    ></iframe>
  );
  // Add this to your global CSS file

  return (
    <DocLayout>
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
      </div>
      <br />
      <br />
      <br />
      <div>
        <span className="text-gray-500">
          Visit this
          <Link
            href="https://ridhi-piddi.vercel.app/"
            className="ml-1 mr-1 text-white"
          >
            Website
          </Link>
          ;)
        </span>
      </div>
    </DocLayout>
  );
}
