import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/WaitlistForm";

export const ParentsHero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-secondary border-b-4 border-accent">
      <div className="container max-w-6xl">
        <div className="text-center space-y-8">
          <span className="inline-block px-4 py-2 bg-primary text-white font-bold rounded-lg border-4 border-accent shadow-[4px_4px_0px_0px_#221F26] transform hover:-translate-y-0.5 transition-transform">
            Now in Beta
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-balance leading-tight">
            Empower Your Teen with
            <br />
            <span className="bg-primary text-white px-4">1:1 Peer Mentoring</span>
          </h1>
          <p className="text-xl md:text-2xl text-accent max-w-3xl mx-auto font-medium">
            Help your child gain social confidence, learn life skills, and thrive academically—all in a safe, guided peer-to-peer environment.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};