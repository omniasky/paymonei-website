import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PriceBadge } from "@/components/atoms/PriceBadge";
import { FeatureCheckmark } from "@/components/atoms/FeatureCheckmark";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  isFree?: boolean;
  isPopular?: boolean;
  className?: string;
}

export function PricingCard({
  title,
  description,
  price,
  period,
  features,
  cta,
  ctaHref,
  isFree = false,
  isPopular = false,
  className,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative flex flex-col h-full transition-all hover:shadow-lg",
        isPopular && "border-primary shadow-md",
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
          Most Popular
        </div>
      )}

      <CardHeader className="pb-8">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base mt-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-6">
        <PriceBadge
          price={price}
          period={period}
          isFree={isFree}
        />

        <div className="space-y-3 pt-6 border-t">
          {features.map((feature, index) => (
            <FeatureCheckmark key={index}>
              {feature}
            </FeatureCheckmark>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-6">
        <Button
          className={cn(
            "w-full h-12 rounded-full text-base font-semibold",
            isPopular && "bg-primary hover:bg-primary/90"
          )}
          variant={isPopular ? "default" : "outline"}
          asChild
        >
          <a href={ctaHref}>{cta}</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
