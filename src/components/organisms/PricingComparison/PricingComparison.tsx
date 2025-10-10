import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ComparisonFeature {
  name: string;
  free: boolean | string;
  growth: boolean | string;
  enterprise: boolean | string;
}

interface PricingComparisonProps {
  features: ComparisonFeature[];
}

export function PricingComparison({ features }: PricingComparisonProps) {
  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-primary mx-auto" />
      ) : (
        <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
      );
    }
    return <span className="text-sm text-center">{value}</span>;
  };

  return (
    <Card className="mt-16 max-w-7xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          Detailed Feature Comparison
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-medium">Feature</th>
                <th className="text-center py-4 px-4 font-medium">Free</th>
                <th className="text-center py-4 px-4 font-medium">Growth</th>
                <th className="text-center py-4 px-4 font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="py-4 px-4 text-sm">{feature.name}</td>
                  <td className="py-4 px-4 text-center">{renderValue(feature.free)}</td>
                  <td className="py-4 px-4 text-center">{renderValue(feature.growth)}</td>
                  <td className="py-4 px-4 text-center">{renderValue(feature.enterprise)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
