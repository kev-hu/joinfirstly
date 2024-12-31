import { ClipboardList, Users, MessageCircle, LineChart } from "lucide-react";

export const ProgramHowItWorks = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Sign Up",
      description: [
        "Students (or parents) fill out a quick form about academic interests, activities, and goals.",
        "Once enrolled, your teen is queued for our Wednesday Match process.",
      ],
    },
    {
      icon: Users,
      title: "We Match Your Teen",
      description: [
        "Our system pairs your teen with an older mentor based on shared interests and goals.",
        "Mentors are vetted for empathy, leadership, and a passion for helping younger peers succeed.",
      ],
    },
    {
      icon: MessageCircle,
      title: "Weekly Chat & Topic",
      description: [
        "Every Wednesday, we send out a Topic of the Week—like "Study Hacks for Finals" or "Overcoming Test Anxiety."",
        "Students and mentors hop on a quick chat or video call to discuss the prompt, set goals, and tackle any current challenges.",
      ],
    },
    {
      icon: LineChart,
      title: "Check-Ins & Progress",
      description: [
        "Mentors log a brief session summary, and parents can see a high-level overview of how each week is going.",
        "Need to switch mentors? No problem—just let us know, and we'll find a new match.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-secondary border-b-4 border-accent">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border-4 border-accent shadow-[8px_8px_0px_0px_#221F26]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <ul className="space-y-2">
                {step.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};