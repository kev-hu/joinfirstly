import { StepCard } from "@/components/StepCard";
import { ClipboardList, MessageCircle, LineChart, UserCheck } from "lucide-react";

export const ParentsHowItWorks = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Registration & Matching",
      description: "Quick questionnaire about your teen's interests and goals for perfect mentor matching.",
      delay: 0,
    },
    {
      icon: MessageCircle,
      title: "Scheduled 1:1 Sessions",
      description: "Structured video sessions covering essential life and academic skills.",
      delay: 200,
    },
    {
      icon: LineChart,
      title: "Progress Tracking",
      description: "Monthly reports with insights on skill development and growth areas.",
      delay: 400,
    },
    {
      icon: UserCheck,
      title: "Professional Oversight",
      description: "Trained facilitators ensure safe, productive conversations.",
      delay: 600,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A step-by-step program designed to help your teen thrive through peer mentoring
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};