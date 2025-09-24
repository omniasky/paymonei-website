"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Wallet } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      <div className="max-w-md mx-auto text-center space-y-6">
        {/* Loading Animation */}
        <div className="relative">
          {/* Outer spinning ring */}
          <div className="w-20 h-20 mx-auto border-4 border-muted rounded-full animate-spin border-t-primary"></div>
          
          {/* Inner wallet icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-sm">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Loading...</h2>
          <p className="text-muted-foreground">
            Please wait while we prepare your wallet dashboard
          </p>
        </div>

        {/* Loading Steps Indicator */}
        <Card className="text-left">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Loader2 className="w-4 h-4 animate-spin text-primary" />
                <span className="text-sm">Initializing secure connection...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-muted flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">Loading your assets...</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-muted flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">Preparing dashboard...</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <div className="text-xs text-muted-foreground">
          <p>💡 <strong>Tip:</strong> Keep your browser updated for the best experience</p>
        </div>
      </div>
    </div>
  )
}