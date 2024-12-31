import { Card } from "@/components/ui/card";
import { BookOpen, Users, MessageSquare, Shield, LineChart } from "lucide-react";

export const ParentsHowItWorks = () => {
  const steps = [
    {
      icon: BookOpen,
      title: "Registration & Matching",
      description: "Parents fill out a quick questionnaire about their teen's interests, academic goals, and personality for optimal mentor matching.",
    },
    {
      icon: Users,
      title: "Scheduled 1:1 Sessions",
      description: "Students connect via live video chat for structured conversations around essential life and academic skills.",
    },
    {
      icon: MessageSquare,
      title: "Shared Text Updates",
      description: "Session summaries are sent via a shared text thread, keeping parents informed about key takeaways and goals.",
    },
    {
      icon: Shield,
      title: "Professional Oversight",
      description: "Trained facilitators oversee discussion topics, ensuring a safe and productive environment.",
    },
    {
      icon: LineChart,
      title: "Progress Tracking",
      description: "Monthly progress reports provide insights on skill development and suggestions for growth.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            A structured approach to peer mentoring that delivers results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <step.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};