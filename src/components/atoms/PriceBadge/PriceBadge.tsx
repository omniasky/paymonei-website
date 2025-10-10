import { cn } from "@/lib/utils";

interface PriceBadgeProps {
  price: string;
  period?: string;
  className?: string;
  isFree?: boolean;
}

export function PriceBadge({ price, period, className, isFree }: PriceBadgeProps) {
  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      <span className={cn(
        "text-4xl font-bold tracking-tight",
        isFree ? "text-primary" : "text-foreground"
      )}>
        {price}
      </span>
      {period && (
        <span className="text-sm text-muted-foreground">
          {period}
        </span>
      )}
    </div>
  );
}
