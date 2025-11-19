import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((segment) => segment !== "");

  const lastSegment = segments[segments.length - 1] || "";

  const formattedSegment = lastSegment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Link className="hover:text-zinc-200" href="/docs">
        Docs
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-zinc-200">{formattedSegment}</span>
    </div>
  );
}
