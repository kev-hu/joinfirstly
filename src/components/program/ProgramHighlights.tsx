import { GraduationCap, Smile, Heart } from "lucide-react";

export const ProgramHighlights = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Built for High School Life",
      description: "Our mentors understand your teen's day-to-day experiences—late-night homework sessions, SAT prep, balancing clubs, and more.",
    },
    {
      icon: Smile,
      title: "Stress-Free Support",
      description: "One quick conversation per week can make a huge difference in managing stress and boosting self-confidence.",
    },
    {
      icon: Heart,
      title: "Future-Focused Growth",
      description: "Whether aiming for college, career, or personal goals, our mentors inspire teens to plan ahead and dream big.",
    },
  ];

  return (
    <section className="py-20 bg-white border-b-4 border-accent">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Highlights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-xl border-4 border-accent shadow-[8px_8px_0px_0px_#221F26]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <highlight.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{highlight.title}</h3>
              </div>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};