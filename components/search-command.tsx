"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function SearchCommand() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      >
        <span className="hidden md:inline-flex">Search documentation...</span>
        <span className="inline-flex md:hidden">Search...</span>
        <kbd className="ml-2 pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Learn">
            <CommandItem
              onSelect={() =>
                runCommand(() => router.push("/docs/installation"))
              }
            >
              installation
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Documentation">
            <CommandItem
              onSelect={() =>
                runCommand(() => router.push("/docs/installation"))
              }
            >
              Getting Started
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/docs/button"))}
            >
              Button
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/docs/mouse"))}
            >
              Mouse
            </CommandItem>
            <CommandItem
              onSelect={() =>
                runCommand(() => router.push("/docs/flashy-mouse"))
              }
            >
              Flashy Mouse
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/settings"))}
            >
              Settings
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
