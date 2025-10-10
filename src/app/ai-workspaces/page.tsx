import type { Metadata } from "next";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import {
  Monitor,
  Brain,
  Check,
  X,
  FileText,
  BarChart3,
  Presentation,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Workspaces - Intelligent Operations Platform | Paymonei",
  description:
    "Stop juggling between scattered business tools. AI-native operations workspace with intelligent document and workflow automation in a single platform.",
  keywords: [
    "AI workspace",
    "operations automation",
    "document automation",
    "workflow automation",
    "business tools",
    "AI operations",
    "intelligent workspace",
    "AI document generation",
    "business automation",
    "unified workspace",
  ],
  openGraph: {
    title: "AI Workspaces - Intelligent Operations Platform | Paymonei",
    description:
      "Stop juggling between scattered business tools. AI-native operations workspace with intelligent document and workflow automation in a single platform.",
    type: "website",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/metadata-image.png",
        width: 1200,
        height: 630,
        alt: "Paymonei AI Workspaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workspaces - Intelligent Operations Platform | Paymonei",
    description:
      "Stop juggling between scattered business tools. AI-native operations workspace with intelligent document and workflow automation in a single platform.",
    images: [
      "https://s3.ap-southeast-3.amazonaws.com/assets.paymonei.com/web/metadata-image.png",
    ],
  },
};

export default function AIWorkspacesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16">
        {/* AI-Native Operations Suite Section */}
        <section className="py-24 px-2 xs:px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/5 to-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-800 mb-6">
                <Monitor className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Intelligence Workspace
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">AI-Native Operations.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 mt-2">
                  Zero Context Switching.
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stop juggling between scattered business tools and manual
                workflows. Your entire operations from documents to analytics
                powered by our AI in a single workspace.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="relative">
                <div className="absolute -top-3 -left-3 px-4 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full text-sm font-medium z-10">
                  Traditional Chaos
                </div>
                <div className="relative bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-900/10 dark:to-orange-900/10 border-2 border-dashed border-red-200 dark:border-red-800 rounded-3xl p-8 opacity-75 h-full flex flex-col">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center text-white font-bold">
                        D
                      </div>
                      <span className="text-sm font-medium">GDocs</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white font-bold">
                        E
                      </div>
                      <span className="text-sm font-medium">GSheet</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
                        c
                      </div>
                      <span className="text-sm font-medium">Canva</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center text-white font-bold">
                        C
                      </div>
                      <span className="text-sm font-medium">Calendly</span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                      <X className="w-4 h-4" />
                      <span className="text-sm">
                        Context switching multiple tools
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                      <X className="w-4 h-4" />
                      <span className="text-sm">
                        Manual copy-paste workflows
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                      <X className="w-4 h-4" />
                      <span className="text-sm">
                        Version control nightmares
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-3 -right-3 px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium z-10">
                  AI-Native Future
                </div>
                <div className="relative bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 border-2 border-violet-200 dark:border-violet-800 rounded-3xl p-8 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                        <Brain className="w-10 h-10" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">
                      AI Operations Suite
                    </h3>
                    <p className="text-center text-white/90 text-sm">
                      Intelligent document & workflow automation
                    </p>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">
                        AI-powered document generation
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">
                        Smart invoice & report automation
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">
                        Unified business operations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-background border border-border/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Documents</h3>
                  <p className="text-sm text-muted-foreground">
                    Auto-generate contracts, proposals, and reports with AI that
                    understands your business real context.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-background border border-border/50 rounded-2xl p-6 hover:border-green-500/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Real-time dashboards and predictive insights without long
                    hours spreadsheet formulas.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-background border border-border/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <Presentation className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Presentations</h3>
                  <p className="text-sm text-muted-foreground">
                    Create stunning presentations from prompts. AI designs
                    slides that match your brand and audiences.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-background border border-border/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Smart calendar that schedules meetings, manages tasks, and
                    optimizes your team&apos;s time.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block">
                <div className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl">
                  <div className="text-left">
                    <div className="text-2xl font-bold">
                      Ready to eliminate tool chaos?
                    </div>
                    <div className="text-violet-100">
                      Enable AI agents to handle your business workflows
                      seamlessly
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-white/20 backdrop-blur text-white rounded-xl font-semibold hover:bg-white/30 transition-all">
                    Start Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
