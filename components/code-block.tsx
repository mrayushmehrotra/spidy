"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  language?: string;
}

export function CodeBlock({
  children,
  language = "tsx",
  className,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);
  const { theme } = useTheme();

  const codeString = React.Children.toArray(children)[0]?.toString() ?? "";

  const onCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 overflow-hidden rounded-lg border">
      <div className="flex items-center justify-between bg-muted px-4 py-2">
        <div className="text-xs font-medium text-muted-foreground">
          {language.toUpperCase()}
        </div>

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

      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          padding: "1.5rem",
          background: "transparent",
        }}
        codeTagProps={{
          className: "font-mono text-sm",
        }}
        className={cn("bg-muted dark:bg-zinc-950", className)}
        {...props}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
