import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type Props = {
  code: string;
  preview: React.ReactNode;
  language?: string;
};

const CodePreview: React.FC<Props> = ({
  code = "",
  preview,
  language = "javascript",
}) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-x-4 mb-2">
        <button
          type="button"
          className={cn(
            "cursor-pointer p-2",
            activeTab === "preview" && "border-b border-white",
          )}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>

        <button
          type="button"
          className={cn(
            "cursor-pointer p-2",
            activeTab === "code" && "border-b border-white",
          )}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
      </div>

      <div className="border border-zinc-400 rounded-sm min-h-[40vh] p-4 flex items-center justify-center">
        {activeTab === "preview" ? (
          <div>{preview}</div>
        ) : (
          <div className="w-full overflow-x-auto">
            <div className="flex justify-end mb-3">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={onCopy}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            {/*  @ts-ignore */}
            <SyntaxHighlighter
              language={language}
              style={oneDark} // ⬅ same theme as CodeBlock
              customStyle={{
                margin: 0,
                padding: "1.25rem",
                background: "transparent",
                fontSize: "0.875rem",
              }}
              codeTagProps={{
                className: "font-mono",
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePreview;
