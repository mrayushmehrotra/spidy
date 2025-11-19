import { Check, Code, Database, Globe, Layers, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typer } from "./Typer";

const features = [
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Hybrid Code",
    description:
      "Can easily work with any tech stack as long as it uses HTML,CSS,JS",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Customizable ",

    description: "Can easily Customized, it's just simple React",
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "Data Fetching",
    description: "APIs for dynamic content.",
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Zero Config",
    description:
      "Automatic compilation and bundling. Optimized for production.",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "File-based Components",
    description: "Every component in directory  have a unique and easy names.",
  },
  {
    icon: <Check className="h-10 w-10" />,
    title: "Built-in Optimizations",
    description: "Used Image tag from Next for Image Optimizations and all.",
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Ship <Typer />
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built on Top of Next for Mainly Next
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
                className="border bg-background shadow-sm transition-all hover:shadow-md"
              >
                <CardHeader className="space-y-1">
                  <div className="mb-2 rounded-lg bg-primary/10 inline-flex p-2 text-primary">
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
