import { Check, Code, Database, Globe, Layers, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typer } from "./Typer";
import { PixelatedLeft } from "./hero-background";

const features = [
  {
    icon: <Globe className="h-10 w-10" />,
    title: "hybrid code",
    description:
      "can easily work with any tech stack as long as it uses html,css,js",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "customizable ",

    description: "can easily customized, it's just simple react",
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "data fetching",
    description: "apis for dynamic content.",
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "zero config",
    description:
      "automatic compilation and bundling. optimized for production.",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "file-based components",
    description: "every component in directory  have a unique and easy names.",
  },
  {
    icon: <Check className="h-10 w-10" />,
    title: "built-in optimizations",
    description: "used image tag from next for image optimizations and all.",
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            ship <Typer />
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            built on top of next for mainly next
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            it support's other tech stack too, but you have to it configure a
            bit
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid gap-6 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border bg-background font-sans shadow-sm transition-all hover:shadow-md"
              >
                <CardHeader className="space-y-1">
                  <div className="mb-2 rounded-lg    inline-flex p-2 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
