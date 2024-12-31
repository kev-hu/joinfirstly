import { Button } from "@/components/ui/button";

export const ParentsHero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-20 bg-secondary border-b-4 border-accent">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-left">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Empower Your Teen with{" "}
              <span className="bg-primary text-white px-2">1:1 Peer Mentoring</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Help your child gain social confidence, learn life skills, and thrive
              academically—all in a safe, guided peer-to-peer environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="text-lg font-bold bg-primary text-white rounded-lg border-4 border-accent shadow-[4px_4px_0px_0px_#221F26] transform transition-all hover:-translate-y-0.5 hover:shadow-[4px_6px_0px_0px_#221F26]"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg font-bold rounded-lg border-4 border-accent shadow-[4px_4px_0px_0px_#221F26] transform transition-all hover:-translate-y-0.5 hover:shadow-[4px_6px_0px_0px_#221F26]"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden border-4 border-accent shadow-[8px_8px_0px_0px_#221F26]">
              <img
                src="/placeholder.svg"
                alt="Students engaged in peer mentoring"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};