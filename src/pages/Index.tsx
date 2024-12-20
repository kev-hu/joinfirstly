import { useEffect } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  MessageSquare, 
  MapPin, 
  Heart, 
  Lightbulb, 
  TrendingUp,
  Instagram,
  Youtube,
  Video // Replacing BrandTiktok with Video icon as a suitable alternative
} from "lucide-react";

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
            <div className="flex flex-col items-center gap-6">
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
            <div className="glass-card p-6 rounded-xl section-fade">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Match with Peers</h3>
              <p className="text-muted-foreground">Connect with students who share your interests and experiences</p>
            </div>
            <div className="glass-card p-6 rounded-xl section-fade">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MessageSquare className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Weekly Discussions</h3>
              <p className="text-muted-foreground">Engage in prompts designed to spark meaningful conversations</p>
            </div>
            <div className="glass-card p-6 rounded-xl section-fade">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MapPin className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nationwide Network</h3>
              <p className="text-muted-foreground">Discover insights from students across the country</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Firstly Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-16 section-fade">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Students Love Firstly</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center section-fade">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Heart className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real Mentorship</h3>
              <p className="text-muted-foreground">Connect with someone who truly gets you</p>
            </div>
            <div className="text-center section-fade">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
              <p className="text-muted-foreground">Weekly prompts that inspire growth</p>
            </div>
            <div className="text-center section-fade">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trendspotting</h3>
              <p className="text-muted-foreground">Stay in the loop with what's relevant in student life</p>
            </div>
          </div>
          <div className="section-fade">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center section-fade">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Trusted by Students Nationwide
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              {/* University logos */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-32 h-16 bg-muted rounded animate-pulse"
                />
              ))}
            </div>
            <div className="max-w-xl mx-auto glass-card p-8 rounded-xl">
              <p className="text-2xl font-semibold mb-4">
                92% of users felt more confident after their first session
              </p>
              <p className="text-muted-foreground">Join thousands of students already benefiting from peer mentorship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary to-secondary/20">
        <div className="container max-w-6xl text-center space-y-8 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold">
            Don't Miss Out on Firstly
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students already benefiting from peer mentorship
          </p>
          <div className="flex flex-col items-center gap-4">
            <WaitlistForm />
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary">FAQ</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Privacy Policy</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Contact Us</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Youtube size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Video size={24} /> {/* Using Video icon instead of BrandTiktok */}
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            © 2024 Firstly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;