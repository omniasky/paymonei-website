/**
 * Google Analytics Integration for Paymonei
 *
 * This module provides a comprehensive analytics solution using Google Analytics 4 (GA4)
 * with custom event tracking for business metrics and user engagement.
 *
 * Setup:
 * 1. The GoogleAnalytics component is already added to layout.tsx
 * 2. Import the analytics object to track custom events
 *
 * Basic Usage:
 * ```typescript
 * import { analytics } from '@/lib/analytics';
 *
 * // Track button clicks
 * analytics.trackButtonClick('get_started', 'hero_section');
 *
 * // Track CTA interactions
 * analytics.trackCTA('start_free_trial', 'pricing_section');
 *
 * // Track navigation
 * analytics.trackNavigation('pricing', 'header_menu');
 * ```
 *
 * React Component Usage:
 * ```tsx
 * import { analytics } from '@/lib/analytics';
 *
 * function HeroSection() {
 *   const handleGetStarted = () => {
 *     analytics.trackCTA('get_started', 'hero');
 *     // Your navigation logic here
 *   };
 *
 *   return (
 *     <button onClick={handleGetStarted}>
 *       Get Started
 *     </button>
 *   );
 * }
 * ```
 *
 * Form Tracking Example:
 * ```tsx
 * function ContactForm() {
 *   const handleSubmit = (e) => {
 *     analytics.trackFormStart('contact_form');
 *     // Form validation...
 *     analytics.trackFormSubmit('contact_form');
 *   };
 *
 *   return <form onSubmit={handleSubmit}>...</form>;
 * }
 * ```
 *
 * Privacy & Consent:
 * ```typescript
 * // Update consent when user accepts cookies
 * analytics.setAnalyticsConsent(true);
 *
 * // Deny consent
 * analytics.setAnalyticsConsent(false);
 * ```
 *
 * Available Tracking Functions:
 * - trackButtonClick(buttonName, location)
 * - trackNavigation(linkName, destination)
 * - trackCTA(ctaName, section)
 * - trackFormStart(formName) / trackFormSubmit(formName)
 * - trackContentView(contentType, contentName)
 * - trackScroll(percentage, page)
 * - trackFeatureClick(featureName)
 * - trackSocialShare(platform, content)
 * - trackDownload(fileName, fileType)
 * - trackExternalLink(url, linkText)
 * - trackError(errorType, errorMessage)
 * - trackBusinessMetric(metric, value)
 */

// Analytics configuration
export const GA_MEASUREMENT_ID = "G-D7Y9RCE4T7";

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "consent",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: Record<string, unknown>[];
  }
}

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Custom event tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Business-specific event tracking functions
export const analytics = {
  // Button clicks
  trackButtonClick: (buttonName: string, location: string) => {
    trackEvent("click", "engagement", `${buttonName}_${location}`);
  },

  // Navigation
  trackNavigation: (linkName: string, destination: string) => {
    trackEvent("navigation", "user_flow", `${linkName}_to_${destination}`);
  },

  // CTA interactions
  trackCTA: (ctaName: string, section: string) => {
    trackEvent("cta_click", "conversion", `${ctaName}_${section}`);
  },

  // Form interactions
  trackFormStart: (formName: string) => {
    trackEvent("form_start", "engagement", formName);
  },

  trackFormSubmit: (formName: string) => {
    trackEvent("form_submit", "conversion", formName);
  },

  // Content engagement
  trackContentView: (contentType: string, contentName: string) => {
    trackEvent("content_view", "engagement", `${contentType}_${contentName}`);
  },

  // Scroll tracking
  trackScroll: (percentage: number, page: string) => {
    trackEvent("scroll", "engagement", `${page}_${percentage}%`);
  },

  // Feature usage
  trackFeatureClick: (featureName: string) => {
    trackEvent("feature_click", "product", featureName);
  },

  // Social sharing
  trackSocialShare: (platform: string, content: string) => {
    trackEvent("share", "social", `${platform}_${content}`);
  },

  // Download tracking
  trackDownload: (fileName: string, fileType: string) => {
    trackEvent("download", "resource", `${fileType}_${fileName}`);
  },

  // External link clicks
  trackExternalLink: (url: string, linkText: string) => {
    trackEvent("external_link", "outbound", `${linkText}_${url}`);
  },

  // Error tracking
  trackError: (errorType: string, errorMessage: string) => {
    trackEvent("error", "technical", `${errorType}_${errorMessage}`);
  },

  // Business metrics
  trackBusinessMetric: (metric: string, value: number) => {
    trackEvent("business_metric", "kpi", metric, value);
  },
};

// Consent management (for GDPR compliance)
export const setAnalyticsConsent = (granted: boolean) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
    });
  }
};

// Initialize analytics with default consent
export const initializeAnalytics = () => {
  if (typeof window !== "undefined" && window.gtag) {
    // Set default consent
    window.gtag("consent", "default", {
      analytics_storage: "granted", // Change to "denied" if you need explicit consent
      ad_storage: "denied",
    });
  }
};