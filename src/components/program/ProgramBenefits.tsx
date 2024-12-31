import { Users, MessageSquare, Shield } from "lucide-react";

export const ProgramBenefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Real Guidance",
      description: "Connect with older high school students who've been through the same classes, extracurriculars, and challenges.",
    },
    {
      icon: MessageSquare,
      title: "Meaningful Conversations",
      description: "Weekly topic prompts ensure discussions stay engaging—covering everything from time management to future planning.",
    },
    {
      icon: Shield,
      title: "Parent Peace of Mind",
      description: "Your teen gets a safe, supportive environment to learn and grow, while you stay in the loop with progress updates.",
    },
  ];

  return (
    <section className="py-20 bg-white border-b-4 border-accent">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Join a Peer Mentorship Program?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-secondary rounded-xl border-4 border-accent shadow-[8px_8px_0px_0px_#221F26]"
            >
              <div className="h-14 w-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};