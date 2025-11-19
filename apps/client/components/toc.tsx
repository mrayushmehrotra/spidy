"use client"

import * as React from "react"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface TocProps {
  headings: { id: string; text: string; level: number }[]
}

export function TableOfContents({ headings }: TocProps) {
  const [activeId, setActiveId] = useState<string>("")
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const elements = headings.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      {
        rootMargin: "0px 0px -80% 0px",
        threshold: 1.0,
      }
    )

    elements.forEach((element) => observer.observe(element))
    observerRef.current = observer

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="hidden xl:block">
      <div className="sticky top-16">
        <h3 className="mb-4 text-sm font-medium">On This Page</h3>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={cn(
                  "inline-block transition-colors hover:text-foreground",
                  activeId === heading.id ? "font-medium text-foreground" : "text-muted-foreground",
                  heading.level === 3 && "pl-4"
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(`#${heading.id}`)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}