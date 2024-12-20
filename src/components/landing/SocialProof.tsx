import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

export const SocialProof = () => {
  return (
    <section className="py-20 px-4 bg-[#E0F2FE] border-b-4 border-black">
      <div className="container max-w-6xl">
        <div className="text-center section-fade">
          <h2 className="text-4xl font-black mb-4">
            What Students Are Saying
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of students who have found guidance and support through our peer mentorship program
          </p>
          
          <TestimonialsCarousel />
          
          <div className="mt-16 max-w-xl mx-auto bg-white p-8 rounded-lg glass-card">
            <p className="text-2xl font-bold mb-4">
              92% of users felt more confident after their first session
            </p>
            <p className="text-muted-foreground">
              Join thousands of students already benefiting from peer mentorship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};