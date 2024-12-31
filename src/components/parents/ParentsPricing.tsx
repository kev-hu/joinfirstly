import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const ParentsPricing = () => {
  const plans = [
    {
      name: "Monthly Membership",
      price: "199",
      features: [
        "4 mentoring sessions",
        "Weekly text updates",
        "Parent & Student Dashboard Access",
        "Progress tracking",
      ],
    },
    {
      name: "Premium Program",
      price: "299",
      features: [
        "8 mentoring sessions",
        "Unlimited text updates",
        "Monthly progress calls",
        "Priority support",
        "Customized learning path",
      ],
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that works best for your family
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl text-center space-y-6"
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="text-4xl font-bold">
                ${plan.price}
                <span className="text-xl text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                size="lg"
                className="w-full text-lg font-bold bg-primary text-white rounded-lg border-4 border-accent shadow-[4px_4px_0px_0px_#221F26] transform transition-all hover:-translate-y-0.5 hover:shadow-[4px_6px_0px_0px_#221F26]"
              >
                Start Free Trial
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};