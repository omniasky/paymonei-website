import { PricingCard } from "@/components/molecules/PricingCard";

export interface PricingTier {
  title: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  isFree?: boolean;
  isPopular?: boolean;
}

interface PricingGridProps {
  tiers: PricingTier[];
}

export function PricingGrid({ tiers }: PricingGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {tiers.map((tier, index) => (
        <PricingCard
          key={index}
          {...tier}
        />
      ))}
    </div>
  );
}
