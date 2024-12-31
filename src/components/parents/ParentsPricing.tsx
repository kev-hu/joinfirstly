import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ParentsPricing = () => {
  const plans = [
    {
      name: "Monthly Membership",
      price: "149",
      features: [
        "4 mentoring sessions",
        "Weekly text updates",
        "Parent & Student Dashboard",
        "Basic progress tracking",
      ],
    },
    {
      name: "Premium Program",
      price: "249",
      features: [
        "8 mentoring sessions",
        "Unlimited text updates",
        "Monthly progress calls",
        "Advanced progress tracking",
        "Priority support",
      ],
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Invest in your teen's future with our transparent pricing plans
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-background border-2 border-accent"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" size="lg">
                Start Free Trial
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};