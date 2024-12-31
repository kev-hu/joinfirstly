import { Users, MessageSquare, MapPin, ClipboardCheck, BarChart } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-[#FEF7E2] border-b-4 border-accent">
      <div className="container max-w-5xl">
        <div className="text-center mb-12 section-fade">
          <h2 className="text-4xl font-black mb-4">Program Structure</h2>
          <p className="text-gray-700 max-w-xl mx-auto font-medium">
            A structured approach to help your teen develop essential life and academic skills through peer mentoring.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-[50%] top-0 h-full w-1 bg-accent hidden md:block" />
          
          {[
            {
              icon: <Users className="text-accent" size={32} />,
              title: "Registration & Matching",
              description: "Parents fill out a quick questionnaire about their teen's interests, academic goals, and personality. We use this info to match them with a compatible peer mentor.",
              align: "right"
            },
            {
              icon: <MessageSquare className="text-accent" size={32} />,
              title: "Scheduled 1:1 Sessions",
              description: "Students connect via live video chat for structured conversations around essential life and academic skills.",
              align: "left"
            },
            {
              icon: <ClipboardCheck className="text-accent" size={32} />,
              title: "Professional Oversight",
              description: "Our trained facilitators oversee discussion topics, ensuring a safe, productive environment.",
              align: "right"
            },
            {
              icon: <MapPin className="text-accent" size={32} />,
              title: "Shared Text Updates",
              description: "After each session, a summary is sent via a shared text thread that includes the parent and student.",
              align: "left"
            },
            {
              icon: <BarChart className="text-accent" size={32} />,
              title: "Progress Tracking",
              description: "Monthly progress reports with insights on skill development, session highlights, and suggestions for growth.",
              align: "right"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-8 last:mb-0 ${
                item.align === "left" ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="absolute left-[50%] -translate-x-1/2 hidden md:flex items-center justify-center w-10 h-10 bg-primary text-white font-bold rounded-full border-4 border-accent z-10">
                {index + 1}
              </div>
              
              <div className="w-full md:w-[calc(50%-1.5rem)] bg-white p-5 rounded-lg border-4 border-accent shadow-[8px_8px_0px_0px_#221F26] transform hover:-translate-y-1 transition-all">
                <div className="h-14 w-14 bg-secondary rounded-lg flex items-center justify-center mb-3 border-2 border-accent">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
              
              <div className="hidden md:block w-[calc(50%-1.5rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};