import { DocsSidebar } from "@/components/docs-sidebar";
import { TableOfContents } from "@/components/toc";

interface DocLayoutProps {
  children: React.ReactNode;
  toc?: { id: string; text: string; level: number }[];
}

export function DocLayout({ children, toc = [] }: DocLayoutProps) {
  return (
    <div className="container px-4 md:px-0 flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
        <div className="h-full   py-6 px-8  pl-8 pr-6 lg:py-8">
          <DocsSidebar />
        </div>
      </aside>
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full min-w-0">{children}</div>
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-10">
            <TableOfContents headings={toc} />
          </div>
        </div>
      </main>
    </div>
  );
}
