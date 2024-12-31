import { Heart, Lightbulb, TrendingUp, GraduationCap } from "lucide-react";

export const WhyChooseSection = () => {
  return (
    <section className="py-20 px-4 bg-[#F3E8FF] border-b-4 border-black">
      <div className="container max-w-6xl">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl font-black mb-4">Key Benefits</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            What sets our peer-mentoring program apart from traditional tutoring or extracurriculars
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Heart className="text-black" size={32} />,
              title: "Confidence & Communication",
              description: "Teens learn to speak up, share ideas, and empathize with peers—crucial life and leadership abilities"
            },
            {
              icon: <Lightbulb className="text-black" size={32} />,
              title: "Academic Motivation",
              description: "Peer mentors provide relatable tips on study habits, time management, and managing stress"
            },
            {
              icon: <TrendingUp className="text-black" size={32} />,
              title: "Emotional Resilience",
              description: "Safe conversations around everyday challenges—bullying, social pressure, or balancing responsibilities"
            },
            {
              icon: <GraduationCap className="text-black" size={32} />,
              title: "College & Career Readiness",
              description: "Encourages goal setting, interview practice, and building a supportive network early on"
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