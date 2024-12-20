import { WaitlistForm } from "@/components/WaitlistForm";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-white border-b-4 border-black">
      <div className="container max-w-6xl">
        <div className="text-center space-y-8 section-fade">
          <span className="inline-block px-4 py-2 bg-yellow-300 text-black font-bold rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-0.5 transition-transform">
            Now in Beta
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-balance leading-tight">
            Your College Journey,
            <br />
            <span className="bg-primary text-white px-4">Better Together</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Connect with peer mentors who understand your college experience and help you navigate your journey to success.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};