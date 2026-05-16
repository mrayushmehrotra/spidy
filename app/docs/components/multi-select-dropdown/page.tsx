"use client";

import * as React from "react";
import { CodeBlock } from "@/components/code-block";
import { DocLayout } from "@/components/doc-layout";
import Breadcrumb from "@/components/ui/breadcumber";
import CodePreview from "@/components/ui/CodePreview";
import Link from "next/link";
import { MultiSelect } from "@/components/ui/multiselect-combobox";

// ─── Options used in the live preview ───────────────────────────────────────

const options = [
    { label: "Email", value: "email" },
    { label: "Phone", value: "phone" },
    { label: "WhatsApp", value: "whatsapp" },
    { label: "SMS", value: "sms" },
    { label: "Telegram", value: "telegram" },
    { label: "Instagram", value: "instagram" },
    { label: "Facebook", value: "facebook" },
    { label: "X (Twitter)", value: "x" },
    { label: "LinkedIn", value: "linkedin" },
    { label: "TikTok", value: "tiktok" },
];

// ─── Live interactive preview ────────────────────────────────────────────────

function MultiSelectPreview() {
    const [selected, setSelected] = React.useState<string[]>([]);

    return (
        <div className="w-full max-w-sm">
            <MultiSelect
                options={options}
                selected={selected}
                onChange={setSelected}
                placeholder="Select channels..."
            />
        </div>
    );
}

// ─── Code snippets (plain strings for display) ───────────────────────────────

const basicCode = `
import * as React from "react";
import { MultiSelect } from "@/components/ui/multiselect-combobox";

const options = [
  { label: "Email", value: "email" },
  { label: "Phone", value: "phone" },
  { label: "WhatsApp", value: "whatsapp" },
];

export function Example() {
  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <MultiSelect
      options={options}
      selected={selected}
      onChange={setSelected}
      placeholder="Select channels..."
    />
  );
}
`.trim();

const multiSelectCode = `
"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export interface Option {
  label: string;
  value: string;
}

interface MultiSelectProps {
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select items...",
  className,
  disabled = false,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleUnselect = (item: string) => {
    onChange(selected.filter((i) => i !== item));
  };

  const handleSelect = (item: string) => {
    if (selected.includes(item)) {
      handleUnselect(item);
    } else {
      onChange([...selected, item]);
    }
  };

  const selectedOptions = options.filter((option) =>
    selected.includes(option.value),
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "h-auto max-h-32 min-h-10 w-full justify-between",
            className,
          )}
          disabled={disabled}
        >
          <div className="flex max-h-24 w-full flex-wrap gap-1 space-y-2 overflow-y-auto">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((option) => (
                <Badge
                  variant="secondary"
                  key={option.value}
                  className="mr-1 mb-0 flex-shrink-0"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleUnselect(option.value);
                  }}
                >
                  {option.label}
                  <button
                    className="ml-1 rounded-full ring-offset-background outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUnselect(option.value);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleUnselect(option.value);
                    }}
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                  </button>
                </Badge>
              ))
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="max-h-[300px] p-0"
        align="start"
        style={{ width: "var(--radix-popover-trigger-width)" }}
      >
        <Command className="w-full">
          <CommandInput placeholder="Search..." />
          <CommandList className="max-h-[200px] overflow-y-auto">
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={() => handleSelect(option.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected.includes(option.value)
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
`.trim();

// ─── Page ────────────────────────────────────────────────────────────────────

export default function MultiSelectDropdownPage() {
    return (
        <DocLayout>
            <div className="max-w-3xl space-y-12">
                <div className="space-y-4">
                    <Breadcrumb />
                    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                        Multi-Select Dropdown
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        A searchable multi-select combobox for picking multiple options with
                        badge display and keyboard support.
                    </p>
                </div>
                <CodePreview
                    code={basicCode}
                    preview={<MultiSelectPreview />}
                    language="tsx"
                />
            </div>

            {/* Full component source */}
            <div className="lg:mt-8 md:mt-4 sm:mt-2">
                <h1 className="  text-2xl font-bold tracking-tight">
                    Want Something Like Shadcn Type?
                </h1>
                <CodeBlock>
                    npx shadcn@latest add https://spidy-blond.vercel.app/r/multi-select-dropdown
                </CodeBlock>

            </div>
        </DocLayout>
    );
}
