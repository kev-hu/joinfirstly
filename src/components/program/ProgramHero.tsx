import { WaitlistForm } from "@/components/WaitlistForm";

export const ProgramHero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-secondary border-b-4 border-accent">
      <div className="container max-w-6xl">
        <div className="text-center space-y-8 section-fade">
          <h1 className="text-5xl md:text-7xl font-black text-balance leading-tight">
            Take on High School
            <br />
            <span className="bg-primary text-white px-4">With Confidence</span>
          </h1>
          <p className="text-xl md:text-2xl text-accent max-w-3xl mx-auto font-medium">
            Peer Mentorship Made Simple
          </p>
          <div className="bg-white p-6 rounded-xl glass-card max-w-xl mx-auto">
            <p className="text-xl md:text-2xl font-bold">
              "92% of our students say they feel more motivated after just one session!"
            </p>
          </div>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};