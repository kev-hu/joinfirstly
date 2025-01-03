import { Users, MessageSquare, MapPin } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-[#FEF7E2] border-b-4 border-accent">
      <div className="container max-w-5xl">
        <div className="text-center mb-12 section-fade">
          <h2 className="text-4xl font-black mb-4">Here's How It Works</h2>
          <p className="text-gray-700 max-w-xl mx-auto font-medium">
            Join a community of students helping each other succeed
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-[50%] top-0 h-full w-1 bg-accent hidden md:block" />
          
          {[
            {
              icon: <Users className="text-accent" size={32} />,
              title: "Match with Peers",
              description: "Connect with students who share your interests and experiences",
              align: "right"
            },
            {
              icon: <MessageSquare className="text-accent" size={32} />,
              title: "Weekly Discussions",
              description: "Engage in prompts designed to spark meaningful conversations",
              align: "left"
            },
            {
              icon: <MapPin className="text-accent" size={32} />,
              title: "Nationwide Network",
              description: "Discover insights from students across the country",
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