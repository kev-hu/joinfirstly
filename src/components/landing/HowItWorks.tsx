import { Users, MessageSquare, MapPin } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-[#FEF7E4] border-b-4 border-black">
      <div className="container max-w-6xl">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl font-black mb-4">Here's How It Works</h2>
          <p className="text-gray-700 max-w-xl mx-auto font-medium">
            Join a community of students helping each other succeed
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="text-black" size={32} />,
              title: "Match with Peers",
              description: "Connect with students who share your interests and experiences"
            },
            {
              icon: <MessageSquare className="text-black" size={32} />,
              title: "Weekly Discussions",
              description: "Engage in prompts designed to spark meaningful conversations"
            },
            {
              icon: <MapPin className="text-black" size={32} />,
              title: "Nationwide Network",
              description: "Discover insights from students across the country"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-1 transition-transform">
              <div className="h-16 w-16 bg-yellow-300 rounded-lg flex items-center justify-center mb-4 mx-auto border-2 border-black">
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