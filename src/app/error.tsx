"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RefreshCw, Home, AlertTriangle, Bug, Mail } from "lucide-react"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  // Determine error type and provide appropriate messaging
  const getErrorInfo = () => {
    if (error.message.includes("Network")) {
      return {
        title: "Network Error",
        description: "Unable to connect to our servers. Please check your internet connection.",
        icon: <RefreshCw className="w-5 h-5" />,
        severity: "warning"
      }
    }
    
    if (error.message.includes("Authentication") || error.message.includes("401")) {
      return {
        title: "Authentication Error",
        description: "Your session has expired. Please log in again to continue.",
        icon: <AlertTriangle className="w-5 h-5" />,
        severity: "destructive"
      }
    }

    if (error.message.includes("Permission") || error.message.includes("403")) {
      return {
        title: "Permission Denied",
        description: "You don't have permission to access this resource.",
        icon: <AlertTriangle className="w-5 h-5" />,
        severity: "destructive"
      }
    }

    // Default generic error
    return {
      title: "Something went wrong",
      description: "An unexpected error occurred. Our team has been notified.",
      icon: <Bug className="w-5 h-5" />,
      severity: "destructive" as const
    }
  }

  const errorInfo = getErrorInfo()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Error Header */}
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
            {errorInfo.icon}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {errorInfo.title}
            </h1>
            <p className="text-muted-foreground text-lg">
              {errorInfo.description}
            </p>
          </div>
        </div>

        {/* Error Details Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Error Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Error Alert */}
            <Alert variant={errorInfo.severity === "warning" ? "default" : "destructive"}>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Error:</strong> {error.message || "Unknown error occurred"}
              </AlertDescription>
            </Alert>

            {/* Error ID */}
            {error.digest && (
              <div className="text-sm text-muted-foreground">
                <strong>Error ID:</strong> <code className="bg-muted px-2 py-1 rounded text-xs">{error.digest}</code>
              </div>
            )}

            {/* Timestamp */}
            <div className="text-sm text-muted-foreground">
              <strong>Time:</strong> {new Date().toLocaleString()}
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting Steps */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Try these steps:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                Refresh the page to try again
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                Check your internet connection
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                Clear your browser cache and cookies
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                Try again in a few minutes
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={reset}
            className="flex items-center gap-2 flex-1"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
          <Button 
            variant="outline" 
            onClick={() => router.push("/")}
            className="flex items-center gap-2 flex-1"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Button>
        </div>

        {/* Contact Support */}
        <div className="text-center pt-6 border-t">
          <p className="text-sm text-muted-foreground mb-3">
            Still having issues? Contact our support team.
          </p>
          <Button variant="ghost" size="sm" className="gap-2" asChild>
            <a href="mailto:support@paymonei.com">
              <Mail className="w-4 h-4" />
              Contact Support
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}