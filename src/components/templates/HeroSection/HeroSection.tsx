import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface HeroSectionProps {
  title: {
    main: string;
    highlight: string;
  };
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export function HeroSection({ title, subtitle, primaryCta }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950/10" />

        {/* Animated gradient orbs with simple animation */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-pulse" />
        <div
          className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        />

        {/* Mesh gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-32 lg:pb-28">
          <div className="text-center">
            {/* Modern badge with animation */}
            <div className="flex justify-center mb-8 sm:mb-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl animate-pulse" />
                <div className="relative inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/50 dark:to-purple-900/50 border border-indigo-200 dark:border-indigo-800">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300">
                    Now Live
                  </span>
                </div>
              </div>
            </div>

            {/* Modern title with better responsive scaling */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              <span className="block text-gray-900 dark:text-white mb-2 sm:mb-4">
                {title.main}
              </span>
              <span className="block">
                <span className="relative inline-block">
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                    {title.highlight}
                  </span>
                </span>
              </span>
            </h1>

            {/* Refined subtitle */}
            <p className="mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-normal leading-relaxed">
              {subtitle}
            </p>

            {/* Modern CTA button - single Get Started with rounded-full */}
            <div className="mt-10 sm:mt-12 lg:mt-14 flex justify-center">
              <Link href={primaryCta.href}>
                <Button
                  size="lg"
                  className="group relative rounded-full px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                >
                  <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center">
                    Get Started
                    <svg
                      className="ml-3 w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Button>
              </Link>
            </div>

            {/* Trust indicators with better mobile layout */}
            <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-gray-200 dark:border-gray-800">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <div className="flex flex-col items-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                    99.9%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Uptime SLA
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                    10M+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Sessions
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                    150+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Countries
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
