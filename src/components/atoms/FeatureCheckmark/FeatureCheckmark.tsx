import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCheckmarkProps {
  children: React.ReactNode;
  className?: string;
}

export function FeatureCheckmark({ children, className }: FeatureCheckmarkProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
        <Check className="w-3 h-3 text-primary" />
      </div>
      <span className="text-sm text-muted-foreground flex-1">
        {children}
      </span>
    </div>
  );
}
