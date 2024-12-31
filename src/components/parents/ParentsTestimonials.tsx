import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

export const ParentsTestimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Parents Say</h2>
          <p className="text-xl text-muted-foreground">
            Real stories from families who have experienced the benefits
          </p>
        </div>
        <TestimonialsCarousel />
      </div>
    </section>
  );
};