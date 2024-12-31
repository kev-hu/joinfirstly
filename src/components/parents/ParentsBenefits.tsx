import { Brain, GraduationCap, Heart, Target } from "lucide-react";

export const ParentsBenefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Confidence & Communication",
      description: "Teens learn to speak up, share ideas, and empathize with peers—crucial life and leadership abilities.",
    },
    {
      icon: GraduationCap,
      title: "Academic Motivation",
      description: "Peer mentors provide relatable tips on study habits, time management, and managing stress.",
    },
    {
      icon: Heart,
      title: "Emotional Resilience",
      description: "Safe conversations around everyday challenges—bullying, social pressure, or balancing responsibilities.",
    },
    {
      icon: Target,
      title: "College & Career Readiness",
      description: "Encourages goal setting, interview practice, and building a supportive network early on.",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Key Benefits</h2>
          <p className="text-xl text-muted-foreground">
            What sets our peer-mentoring program apart
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};