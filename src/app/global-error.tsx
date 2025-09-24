"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RefreshCw, Home, AlertTriangle, ServerCrash } from "lucide-react"

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Critical application error:", error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 flex items-center justify-center p-4">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Critical Error Header */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                <ServerCrash className="w-10 h-10 text-destructive" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-destructive">
                  Critical Error
                </h1>
                <p className="text-muted-foreground text-lg">
                  A critical error occurred that prevented the application from loading properly.
                </p>
              </div>
            </div>

            {/* Error Details Card */}
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-destructive">
                  <AlertTriangle className="w-5 h-5" />
                  System Error Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Critical Error Alert */}
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Critical System Error:</strong> {error.message || "Unknown system error occurred"}
                  </AlertDescription>
                </Alert>

                {/* Error ID */}
                {error.digest && (
                  <div className="text-sm text-muted-foreground">
                    <strong>Error ID:</strong> <code className="bg-muted px-2 py-1 rounded text-xs font-mono">{error.digest}</code>
                  </div>
                )}

                {/* Timestamp */}
                <div className="text-sm text-muted-foreground">
                  <strong>Time:</strong> {new Date().toLocaleString()}
                </div>

                {/* Error Stack (in development) */}
                {process.env.NODE_ENV === "development" && error.stack && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm font-medium">
                      Stack Trace (Development Only)
                    </summary>
                    <pre className="mt-2 text-xs bg-muted p-3 rounded overflow-auto max-h-48">
                      {error.stack}
                    </pre>
                  </details>
                )}
              </CardContent>
            </Card>

            {/* Recovery Instructions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" />
                  Recovery Steps
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <strong>Reload the page</strong> - This may resolve temporary issues
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <strong>Clear browser data</strong> - Clear cache, cookies, and local storage
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <strong>Try a different browser</strong> - Use Chrome, Firefox, or Safari
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">4</span>
                    <div>
                      <strong>Contact support</strong> - If the problem persists, reach out to our team
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Emergency Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={reset}
                className="flex items-center gap-2 flex-1"
                size="lg"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Application
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = "/"}
                className="flex items-center gap-2 flex-1"
                size="lg"
              >
                <Home className="w-4 h-4" />
                Go to Homepage
              </Button>
            </div>

            {/* Emergency Contact */}
            <div className="text-center pt-6 border-t border-destructive/20">
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Emergency Support:</strong> For urgent issues, contact our technical team immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="ghost" size="sm" asChild>
                  <a href="mailto:support@paymonei.com?subject=Critical%20Error%20Report">
                    Email Support
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://status.paymonei.com" target="_blank" rel="noopener noreferrer">
                    System Status
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}