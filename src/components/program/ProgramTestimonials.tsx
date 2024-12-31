import { WaitlistForm } from "@/components/WaitlistForm";

export const ProgramTestimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Parents Love It Because...</h2>
        </div>
        
        <div className="max-w-3xl mx-auto mb-16">
          <blockquote className="bg-white p-8 rounded-xl border-4 border-accent shadow-[8px_8px_0px_0px_#221F26] mb-4">
            <p className="text-xl mb-4">
              "My daughter found someone who really 'gets it.' Each week, she's excited to share her wins—and for the first time, she's taking the lead in her own success."
            </p>
            <footer className="text-muted-foreground">
              – Jessica M., Parent of a 10th Grader
            </footer>
          </blockquote>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-white p-6 rounded-xl border-4 border-accent">
              <h3 className="font-bold mb-2">Safe and Secure</h3>
              <p className="text-muted-foreground">
                We prioritize a supportive environment, so you can rest easy knowing your teen is in good hands.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-4 border-accent">
              <h3 className="font-bold mb-2">Transparent Oversight</h3>
              <p className="text-muted-foreground">
                We'll keep you updated on session topics and milestones—no surprises.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sign up now to give your teen the guidance, motivation, and community they need to thrive in high school.
          </p>
          <WaitlistForm />
          <div className="mt-8 text-center">
            <p className="font-bold mb-2">Questions?</p>
            <p className="text-muted-foreground">
              Email us at{" "}
              <a href="mailto:kevin@joinfirstly.com" className="text-primary hover:underline">
                kevin@joinfirstly.com
              </a>
              {" "}or explore our FAQ for more details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};