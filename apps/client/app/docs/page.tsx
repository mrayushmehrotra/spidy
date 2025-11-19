import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DocLayout } from "@/components/doc-layout"

export default function DocsPage() {
  return (
    <DocLayout>
      <div className="max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" id="introduction">
            Introduction
          </h1>
          <p className="text-xl text-muted-foreground">
            Welcome to the Next.js documentation!
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="what-is-nextjs">
            What is Next.js?
          </h2>
          <p className="leading-7">
            Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
          </p>
          <p className="leading-7">
            Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="main-features">
            Main Features
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/docs/app-router/routing" className="group rounded-lg border p-4 transition-colors hover:border-foreground">
              <h3 className="font-medium mb-2 group-hover:text-primary">Routing</h3>
              <p className="text-sm text-muted-foreground">
                File-based routing system built on concepts of pages and layouts
              </p>
            </Link>
            <Link href="/docs/app-router/rendering" className="group rounded-lg border p-4 transition-colors hover:border-foreground">
              <h3 className="font-medium mb-2 group-hover:text-primary">Rendering</h3>
              <p className="text-sm text-muted-foreground">
                Client-side and Server-side Rendering with Client and Server Components
              </p>
            </Link>
            <Link href="/docs/app-router/data-fetching" className="group rounded-lg border p-4 transition-colors hover:border-foreground">
              <h3 className="font-medium mb-2 group-hover:text-primary">Data Fetching</h3>
              <p className="text-sm text-muted-foreground">
                Simplified data fetching with async/await in Server Components
              </p>
            </Link>
            <Link href="/docs/app-router/caching" className="group rounded-lg border p-4 transition-colors hover:border-foreground">
              <h3 className="font-medium mb-2 group-hover:text-primary">Caching</h3>
              <p className="text-sm text-muted-foreground">
                Automatic and configurable caching mechanism for better performance
              </p>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="getting-started">
            Getting Started
          </h2>
          <p className="leading-7">
            To start using Next.js, we recommend creating a new project using the create-next-app CLI, which sets up everything automatically for you.
          </p>
          <Link href="/docs/installation">
            <Button className="gap-1 mt-2">
              Get Started
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </DocLayout>
  )
}