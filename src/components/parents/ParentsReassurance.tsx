import { Shield, Calendar, MessageSquare, TrendingUp } from "lucide-react";

export const ParentsReassurance = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Moderated",
      description: "Sessions led by trained facilitators",
    },
    {
      icon: Calendar,
      title: "Schedule-Friendly",
      description: "Flexible session times, minimal hassle",
    },
    {
      icon: MessageSquare,
      title: "Shared Text Updates",
      description: "Parents get updates directly",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "See improvements in confidence and academic engagement",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border-2 border-accent bg-card"
            >
              <feature.icon className="w-12 h-12 text-primary" />
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};