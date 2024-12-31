import { WaitlistForm } from "@/components/WaitlistForm";
import { Shield, Clock, MessageSquare, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-secondary border-b-4 border-accent">
      <div className="container max-w-6xl">
        <div className="text-center space-y-8 section-fade">
          <h1 className="text-5xl md:text-7xl font-black text-balance leading-tight">
            Empower Your Teen with
            <br />
            <span className="bg-primary text-white px-4">1:1 Peer Mentoring</span>
          </h1>
          <p className="text-xl text-accent max-w-2xl mx-auto font-medium">
            Help your child gain social confidence, learn life skills, and thrive academically—all in a safe, guided peer-to-peer environment.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                text: "Safe & Moderated"
              },
              {
                icon: <Clock className="w-6 h-6" />,
                text: "Schedule-Friendly"
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                text: "Shared Text Updates"
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                text: "Proven Results"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border-4 border-accent shadow-[4px_4px_0px_0px_#221F26]">
                {item.icon}
                <p className="text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};