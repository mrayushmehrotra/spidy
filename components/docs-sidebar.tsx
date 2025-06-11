"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";

interface DocsSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const docsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Button",
          href: "/docs/components/button",
        },
        {
          title: "Mouse",
          href: "/docs/components/mouse",
        },
        {
          title: "Flashy Mouse",
          href: "/docs/components/flashy-mouse",
        },

        {
          title: "Magnetic Element",
          href: "/docs/components/magnetElement",
        },
        {
          title: "Caching",
          href: "/docs/app-router/caching",
        },
      ],
    },
  ],
};

export function DocsSidebar({ className }: DocsSidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        {docsConfig.sidebarNav.map((section, index) => (
          <div key={index} className="px-3 py-2">
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md py-4 px-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground">
                <h4>{section.title}</h4>
                <ChevronRight className="h-4 w-4 transition-transform duration-200" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-1">
                {section.items.map((item) => (
                  <div key={item.href} className="mt-1">
                    <Link href={item.href}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start pl-8 font-normal",
                          pathname === item.href
                            ? "bg-muted font-medium text-primary"
                            : "text-muted-foreground",
                        )}
                      >
                        {item.title}
                      </Button>
                    </Link>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}
      </div>
    </div>
  );
}
