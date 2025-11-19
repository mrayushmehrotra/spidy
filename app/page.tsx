import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />

      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                What&apos;s Better than a component Library?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                An Easy Peasy integrating UI Library, Learn how to build
                production-grade applications Quickly with Next.js through our
                comprehensive docs.
              </p>
              <div className="mt-8">
                <Link href="/docs">
                  <Button size="lg">Start Learning</Button>
                </Link>
              </div>
            </div>

            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="rounded-2xl shadow-lg border p-6 bg-background shadow-sm">
                  <h3 className="text-lg font-semibold">Foundations</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our Prime Goal is to create basic Components which can be
                    easily implemented through several tech stack
                  </p>
                </div>
                <div className="rounded-2xl border p-6 bg-background shadow-sm">
                  <h3 className="text-lg font-semibold">Next/React?</h3>
                  <p className="mt-2 text-muted-foreground">
                    There will be some component&apos;s build only for
                    Next.js/React
                  </p>
                </div>
                <div className="rounded-2xl border p-6 bg-background shadow-sm">
                  <h3 className="text-lg font-semibold">Create a dashboard</h3>
                  <p className="mt-2 text-muted-foreground">
                    Build a complete dashboard with data fetching and
                    authentication, you can get dashboard component&apos;s here.
                  </p>
                </div>
                <div className="rounded-2xl border p-6 bg-background shadow-sm">
                  <h3 className="text-lg font-semibold">
                    Create an e-commerce site
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    you can easily build e-commerce, there will be some
                    components for that too :)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h6 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted by the world's most ambitious teams <sup>fake</sup>
            </h6>
          </div>
          <div className="mx-auto mt-16 max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {/* Google */}
              <div className="col-span-1 flex justify-center py-2">
                <div className="h-16 w-32 flex items-center grayscale transition-all duration-200 hover:grayscale-0">
                  <Image
                    src="/google.png"
                    alt="Google"
                    layout="responsive"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Zomato */}
              <div className="col-span-1 flex justify-center py-2">
                <div className="h-16 w-32 flex items-center grayscale transition-all duration-200 hover:grayscale-0">
                  <Image
                    src="/zomato.png"
                    alt="Zomato"
                    layout="responsive"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Microsoft */}
              <div className="col-span-1 flex justify-center py-2">
                <div className="h-16 w-32 flex items-center grayscale transition-all duration-200 hover:grayscale-0">
                  <Image
                    src="/microsoft.png"
                    alt="Microsoft"
                    layout="responsive"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Better Auth */}
              <div className="col-span-1 flex justify-center py-2">
                <div className="h-16 w-32 flex items-center grayscale transition-all duration-200 hover:grayscale-0">
                  <Image
                    src="/better-auth.png"
                    alt="Better Auth"
                    layout="responsive"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Neon */}
              <div className="col-span-1 flex justify-center py-2">
                <div className="h-16 w-32 flex items-center grayscale transition-all duration-200 hover:grayscale-0">
                  <Image
                    src="/neon.svg"
                    alt="Neon"
                    layout="responsive"
                    width={90}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
