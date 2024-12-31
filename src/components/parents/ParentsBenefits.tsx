import { Brain, Rocket, Shield, Trophy } from "lucide-react";

export const ParentsBenefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Confidence & Communication",
      description: "Develop crucial life and leadership abilities through peer interaction",
    },
    {
      icon: Rocket,
      title: "Academic Motivation",
      description: "Get relatable tips on study habits and time management",
    },
    {
      icon: Shield,
      title: "Emotional Resilience",
      description: "Navigate social pressures and daily challenges with peer support",
    },
    {
      icon: Trophy,
      title: "College & Career Readiness",
      description: "Build early networks and practice essential life skills",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What sets our peer mentoring program apart
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 rounded-xl bg-background border-2 border-accent"
            >
              <benefit.icon className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};