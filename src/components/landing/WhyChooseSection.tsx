import { Heart, Lightbulb, TrendingUp } from "lucide-react";

export const WhyChooseSection = () => {
  return (
    <section className="py-20 px-4 bg-[#F3E8FF] border-b-4 border-black">
      <div className="container max-w-6xl">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl font-black mb-4">Why Students Love Firstly</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Heart className="text-black" size={32} />,
              title: "Real Mentorship",
              description: "Find peers who truly understand the unique challenges of high school"
            },
            {
              icon: <Lightbulb className="text-black" size={32} />,
              title: "Actionable Insights",
              description: "Weekly prompts that inspire personal growth, time management, and self-discovery"
            },
            {
              icon: <TrendingUp className="text-black" size={32} />,
              title: "Trendspotting",
              description: "Stay in the loop on what's relevant to teens nationwide"
            }
          ].map((item, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform">
              <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto border-2 border-black">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};