import { Shield, Calendar, MessageCircle, LineChart } from "lucide-react";

export const ParentsReassurance = () => {
  const badges = [
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
      icon: MessageCircle,
      title: "Shared Text Updates",
      description: "Parents get updates directly",
    },
    {
      icon: LineChart,
      title: "Proven Results",
      description: "See improvements in confidence and academic engagement",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl text-center space-y-4"
            >
              <div className="mx-auto w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold">{badge.title}</h3>
              <p className="text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};