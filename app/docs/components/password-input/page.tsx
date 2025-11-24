"use client";
import { DocLayout } from "@/components/doc-layout";
import { CodeBlock } from "@/components/code-block";
import { PasswordInput } from "@/components/ui/password-input";

export default function PasswordInputPage() {
  const toc = [
    { id: "usage", text: "usage", level: 2 },
    { id: "examples", text: "examples", level: 2 },
  ];

  return (
    <DocLayout toc={toc}>
      <div className="max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            password input
          </h1>
          <p className="text-md text-muted-foreground">
            a password input field with toggle visibility functionality using eye icon.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight" id="usage">
            usage
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border p-6">
              <PasswordInput placeholder="enter your password" />
            </div>
            <CodeBlock language="tsx">
{`import { PasswordInput } from "@/components/ui/password-input";

export function PasswordInputDemo() {
  return <PasswordInput placeholder="enter your password" />;
}`}
            </CodeBlock>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-xl font-semibold tracking-tight" id="examples">
            examples
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">with label</h3>
              <div className="rounded-lg border p-6 space-y-2">
                <label className="text-sm font-medium">password</label>
                <PasswordInput placeholder="enter password" />
              </div>
              <CodeBlock language="tsx">
{`<div className="space-y-2">
  <label className="text-sm font-medium">password</label>
  <PasswordInput placeholder="enter password" />
</div>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">disabled state</h3>
              <div className="rounded-lg border p-6">
                <PasswordInput placeholder="disabled password" disabled />
              </div>
              <CodeBlock language="tsx">
{`<PasswordInput placeholder="disabled password" disabled />`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}