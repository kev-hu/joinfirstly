import { useEffect } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { StepCard } from "@/components/StepCard";
import { Users, MessageSquare, TrendingUp } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container max-w-6xl">
          <div className="text-center space-y-8 section-fade">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
              Now in Beta
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-balance">
              Your College Journey,
              <br />
              Better Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with peer mentors who understand your college experience and help you navigate your journey to success.
            </p>
            <div className="flex justify-center">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Here's How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join a community of students helping each other succeed
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              icon={Users}
              title="Match with Peers"
              description="Connect with students who share your interests and experiences"
              delay={100}
            />
            <StepCard
              icon={MessageSquare}
              title="Engage in Discussions"
              description="Participate in weekly prompts designed to spark meaningful conversations"
              delay={200}
            />
            <StepCard
              icon={TrendingUp}
              title="Track Progress"
              description="See your growth and celebrate achievements with your mentor"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center section-fade">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Trusted by Students Nationwide
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Replace with actual university logos */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-32 h-16 bg-muted rounded animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary to-secondary/20">
        <div className="container max-w-6xl text-center space-y-8 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your College Experience?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students already benefiting from peer mentorship
          </p>
          <div className="flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;